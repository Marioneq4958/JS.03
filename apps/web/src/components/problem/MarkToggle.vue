<script setup lang="ts">
import { useProblemContext } from '@/composables/problem';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { LucideBookmark } from '@lucide/vue';
import { useProblemsStore } from '@/stores/problems';
import { computed } from 'vue';
import { Button } from '../ui/button';

const { state } = useProblemContext();
const problemsStore = useProblemsStore();

function toggleMark() {
  problemsStore.markProblem(state.value.id, state.value.collectionId);
}

const isMarked = computed(() => problemsStore.isMarked(state.value.id, state.value.collectionId));
</script>

<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button size="icon" variant="secondary" @click="toggleMark">
        <LucideBookmark :class="{ 'text-yellow-500 fill-current': isMarked }" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      Zapisz zadanie
    </TooltipContent>
  </Tooltip>
</template>
