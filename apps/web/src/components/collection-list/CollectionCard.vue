<script setup lang="ts">
import type { Collection } from '@repo/problems';
import { computed } from 'vue';

const props = defineProps<{ id: string; collection: Collection }>();

const problemCount = computed(() => Object.values(props.collection.problems).length);
</script>

<template>
  <li>
    <RouterLink
      :to="{ name: 'collection', params: { id } }"
      class="bg-card hover:bg-accent transition-colors p-4 rounded-md border h-full flex flex-col"
    >
      <p class="text-lg font-semibold my-1">{{ collection.name }}</p>
      <p class="text-sm text-muted-foreground">{{ collection.description }}</p>
      <ul class="flex mt-2 flex-wrap gap-1 flex-1 items-end">
        <li class="bg-primary/20 text-primary rounded-sm text-xs px-2 py-1 font-medium border border-primary/40">
          Liczba zadań: {{ problemCount }}
        </li>
      </ul>
    </RouterLink>
  </li>
</template>
