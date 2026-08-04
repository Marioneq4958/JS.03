<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import { LucideX, LucideRotateCw, LucideTerminal } from '@lucide/vue';
import { Button } from '../ui/button/index.ts';
import { useProblemContext } from '@/composables/problem';
import BasePanel from './BasePanel.vue';

defineProps<{ params: { onClose: () => void } }>();

const { state, code } = useProblemContext();

const launchedCode = ref<string | null>(null);
const sandboxContainer = useTemplateRef('sandbox-container');
const consoleLogs = ref<{ message: string; level: 'log' | 'error' | 'warn' }[]>([]);
const showConsole = ref(false);
let observer: IntersectionObserver | null = null;

async function run() {
  const solution = code.value;
  consoleLogs.value = [];
  if (!sandboxContainer.value) return;

  [...sandboxContainer.value.children].forEach((child) => child.remove());

  const sandbox = document.createElement('iframe');
  const promise = new Promise<void>((resolve) => {
    sandbox.addEventListener('load', () => resolve(), { once: true });
  });
  sandboxContainer.value.appendChild(sandbox);
  await promise;

  const doc = sandbox.contentDocument;
  doc?.open();
  doc?.write(solution);
  doc?.close();

  inject(sandbox.contentWindow!);

  launchedCode.value = solution;
}

function inject(windowInstance: Window) {
  windowInstance.addEventListener(
    'error',
    (e) => {
      if (!e.target || !('src' in e.target)) {
        consoleLogs.value.push({ message: e.message, level: 'error' });
        return;
      }
      const filename = (e.target.src as string).replace(new URL('./', window.location.href).href, '');
      const mappedPath = state.value.assets[filename];
      if (mappedPath) e.target.src = mappedPath;
    },
    true,
  );

  const sandboxConsole = (windowInstance as unknown as {
    console: {
      log: (...data: unknown[]) => void;
      warn: (...data: unknown[]) => void;
      error: (...data: unknown[]) => void;
    };
  }).console;

  sandboxConsole.log = (...data: unknown[]) => {
    consoleLogs.value.push({ message: data.join(' '), level: 'log' });
  };

  sandboxConsole.warn = (...data: unknown[]) => {
    consoleLogs.value.push({ message: data.join(' '), level: 'warn' });
  };

  sandboxConsole.error = (...data: unknown[]) => {
    consoleLogs.value.push({ message: data.join(' '), level: 'error' });
  };
}

const refreshNeeded = computed(() => launchedCode.value && code.value !== launchedCode.value);

function toggleConsole() {
  showConsole.value = !showConsole.value;
}

onMounted(() => {
  if (sandboxContainer.value) {
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) run();
    });

    observer.observe(sandboxContainer.value);
  }

  run();
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <BasePanel title="Podgląd" @close="params.onClose">
    <div class="p-2 border-b flex gap-3 justify-between items-center">
      <div class="flex gap-1">
        <Button size="icon-sm" @click="run" :variant="refreshNeeded ? 'default' : 'secondary'">
          <LucideRotateCw />
        </Button>
        <Button size="icon-sm" @click="toggleConsole" :variant="showConsole ? 'default' : 'secondary'">
          <LucideTerminal />
        </Button>
      </div>
      <p class="text-sm text-muted-foreground" v-if="refreshNeeded">Odśwież, aby zobaczyć zmiany po edycji kodu.</p>
    </div>
    <div ref="sandbox-container" class="flex-1 *:border-none *:bg-white *:w-full flex flex-col *:flex-1"></div>
    <section class="max-h-120 min-h-80 overflow-y-auto" v-if="showConsole">
      <div class="sticky top-0 bg-accent font-medium px-2 py-1 text-sm flex justify-between">
        Konsola
        <button @click="toggleConsole" class="cursor-pointer">
          <LucideX class="size-3.5" />
        </button>
      </div>
      <ul class="font-mono text-xs">
        <li
          class="border-b px-2 py-1"
          v-for="(entry, index) in consoleLogs"
          :key="index"
          :class="{
            'bg-red-200/10 text-red-400': entry.level === 'error',
            'bg-yellow-200/10 text-yellow-400': entry.level === 'warn',
          }"
        >
          {{ entry.message }}
        </li>
      </ul>
    </section>
  </BasePanel>
</template>
