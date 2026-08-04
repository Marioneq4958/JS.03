<script setup lang="ts">
import BasePanel from './BasePanel.vue';
import { useProblemContext } from '@/composables/problem.ts';

defineProps<{ params: unknown }>();
const { state } = useProblemContext();
</script>

<template>
  <BasePanel title="Zasady oceniania" v-if="state.assessmentCriteria">
    <div class="p-5 flex-1 overflow-y-auto flex flex-col justify-between">
      <component :is="state.assessmentCriteria" />
    </div>
  </BasePanel>
</template>
