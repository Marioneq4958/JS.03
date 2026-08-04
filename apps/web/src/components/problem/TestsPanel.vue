<script setup lang="ts">
import { LucideCheck, LucideLoaderCircle, LucidePlay, LucideTestTube, LucideX } from '@lucide/vue';
import { computed, ref, useTemplateRef } from 'vue';
import { Button } from '../ui/button/index.ts';
import { type Log, TestRunner } from '@repo/testing';
import TestDetailsDialog from './TestDetailsDialog.vue';
import { useProblemContext } from '@/composables/problem.ts';
import BasePanel from './BasePanel.vue';

interface TestResult {
  index: number;
  logs: Log[];
  error: string | null;
  name: string;
}

defineProps<{ params: { onClose: () => void } }>();

const { state, code } = useProblemContext();

const container = useTemplateRef('container');
const results = ref<TestResult[] | null>(null);
const isRunning = ref(false);

async function run() {
  if (!container.value) return;

  isRunning.value = true;
  results.value = await Promise.all(
    state.value.tests.map(async (test, index) => {
      const { error, logs } = await TestRunner.run(code.value, test);
      return { index, error: error?.message ?? '', logs, name: test.name };
    }),
  );
  isRunning.value = false;
}

const allTestsPassed = computed(() => {
  if (!results.value) return false;
  return results.value.map((result) => !result.error).reduce((a, b) => a && b, true);
});
</script>

<template>
  <BasePanel title="Testy" @close="params.onClose">
    <div class="flex flex-1 flex-col relative">
      <Transition
        enter-active-class="transition-all duration-100"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <div v-if="!state.tests.length" class="flex-1 p-5 flex flex-col items-center justify-center">
          <LucideX class="size-25 opacity-50 mb-5" />
          <div aria-hidden="true" class="text-xl font-semibold my-2">Brak testów dla zadania</div>
          <p class="text-center text-sm mb-10">
            To zadanie nie ma przygotowanych testów, oceń jego poprawność samodzielnie.
          </p>
        </div>
        <div v-else-if="!results && !isRunning" class="flex-1 p-5 flex flex-col items-center justify-center">
          <LucideTestTube class="size-25 opacity-50 mb-5" />
          <div aria-hidden="true" class="text-xl font-semibold my-2">Testy</div>
          <p class="text-center text-sm mb-10">
            Dzięki testom możesz łatwo sprawdzić czy Twoje rozwiązanie jest poprawne.
          </p>
          <Button @click="run">
            <LucidePlay />
            Uruchom testy
          </Button>
        </div>
        <div v-else-if="isRunning" class="flex-1 p-3 flex gap-4 items-center justify-center">
          <LucideLoaderCircle class="animate-spin animation-duration-[600ms]!" />
          <span class="text-sm">Trwa testowanie...</span>
        </div>
        <div v-else-if="results" class="flex-1 flex flex-col">
          <div class="flex-1 p-5 overflow-y-auto">
            <p class="text-xl mt-5 font-semibold">Wyniki testów</p>
            <p class="text-muted-foreground mb-5 text-sm">Kliknij na test, aby zobaczyć szczegóły.</p>
            <div
              class="mb-4 bg-green-800/20 text-green-300 p-2 rounded-md flex items-center justify-center gap-2"
              v-if="allTestsPassed"
            >
              <LucideCheck class="size-4.5" />
              <p class="text-center text-sm">Wszystkie testy przeszły, tak trzymaj!</p>
            </div>
            <ul class="space-y-2">
              <li v-for="test in results" :key="test.index">
                <TestDetailsDialog :test="test">
                  <div class="border rounded-md space-y-3 py-3 overflow-hidden bg-secondary cursor-pointer">
                    <div class="px-3 flex gap-2 items-center text-sm">
                      <LucideCheck class="text-green-600 size-4.5" v-if="!test.error" />
                      <LucideX class="text-red-600 size-4.5" v-else />
                      <p>{{ test.index + 1 }}. {{ test.name }}</p>
                    </div>
                    <div class="mx-3 text-xs bg-red-800/20 text-red-300 px-3 py-2 rounded-md whitespace-pre-line" v-if="test.error">
                      {{ test.error }}
                    </div>
                  </div>
                </TestDetailsDialog>
              </li>
            </ul>
          </div>
          <div class="p-5">
            <Button class="w-full" size="sm" @click="run">
              <LucidePlay />
              Uruchom ponownie
            </Button>
          </div>
        </div>
      </Transition>
    </div>
  </BasePanel>
  <div ref="container" class="absolute w-0 h-0 overflow-hidden"></div>
</template>
