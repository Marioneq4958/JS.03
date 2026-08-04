<script setup lang="ts">
import { difficultyClasses, difficultyNames } from '@/constants';
import { useProblemsStore } from '@/stores/problems';
import { LucideBookmark } from '@lucide/vue';
import type { Problem } from '@repo/problems';

defineProps<{ id: string; collectionId: string; problem: Problem & { index: number } }>();

const problemsStore = useProblemsStore();
</script>

<template>
  <li>
    <RouterLink
      class="flex items-center border border-border bg-card rounded-md px-4 py-3.5 hover:bg-accent transition-colors group gap-4"
      :to="{ name: 'problem', params: { problemId: id, collectionId } }"
    >
      <div class="flex-1">
        <p class="font-medium">
          <span class="font-normal text-muted-foreground">{{ problem.index + 1 }}.</span> {{ problem.title }}
        </p>
        <ul class="text-[0.8125rem] text-foreground/80 flex flex-wrap gap-2 mt-1.5">
          <li v-for="tag in problem.tags" :key="tag" class="border bg-accent px-1.75 py-0.5 rounded-sm">{{ tag }}</li>
        </ul>
      </div>
      <button @click.prevent="problemsStore.markProblem(id, collectionId)" class="cursor-pointer">
        <LucideBookmark
          class="opacity-0 group-hover:opacity-100 transition-all text-muted-foreground size-6"
          :class="{
            'fill-current text-yellow-500! opacity-100!': problemsStore.isMarked(id, collectionId),
          }"
        />
      </button>
      <div
        v-if="problem.difficulty"
        :class="difficultyClasses[problem.difficulty]"
        class="text-sm bg-current/8 px-2 py-1.5 rounded-sm w-18 text-center border border-current/15 font-medium"
      >
        {{ difficultyNames[problem.difficulty] }}
      </div>
    </RouterLink>
  </li>
</template>
