<script setup lang="ts">
import { LucideFile } from '@lucide/vue';
import BasePanel from './BasePanel.vue';
import { useProblemContext } from '@/composables/problem.ts';

defineProps<{ params: unknown }>();
const { state } = useProblemContext();
</script>

<template>
  <BasePanel title="Treść zadania">
    <div class="p-5 pt-4 flex-1 overflow-y-auto flex flex-col justify-between">
      <component :is="state.content" />

      <div v-if="Object.keys(state.assets).length" class="py-1.5 px-2.5 bg-secondary border rounded-sm mt-6">
        <p class="font-semibold mb-1">Dostępne pliki do użycia w zadaniu</p>
        <ul>
          <li v-for="[originalPath, actualPath] in Object.entries(state.assets)" :key="actualPath">
            <a
              class="text-xs font-mono flex gap-1.5 items-center my-2 hover:underline"
              :href="actualPath"
              target="_blank"
            >
              <LucideFile class="size-4" />
              {{ originalPath }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </BasePanel>
</template>
