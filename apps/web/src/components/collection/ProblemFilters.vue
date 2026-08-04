<script setup lang="ts">
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import type { Problem } from '@repo/problems';
import { computed } from 'vue';
import { difficultyClasses, difficultyNames } from '@/constants';

const props = defineProps<{ problems: Record<string, Problem> }>();
const model = defineModel<{ tag: string | null; difficulty: string | null; search: string }>({ required: true });

const allTags = computed(() => {
  const problems = Object.values(props.problems);
  const tagCounts = new Map<string, number>();
  problems.forEach((problem) => {
    problem.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    });
  });
  return [...tagCounts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => (a.tag > b.tag ? 1 : -1))
    .sort((a, b) => {
      if (a.tag.startsWith('Typ:') && !b.tag.startsWith('Typ:')) return -1;
      if (!a.tag.startsWith('Typ:') && b.tag.startsWith('Typ:')) return 1;
      return b.count > a.count ? 1 : -1;
    });
});
</script>

<template>
  <fieldset class="my-5 flex gap-5">
    <legend class="sr-only">Filtry</legend>
    <div class="space-y-2">
      <Label for="difficulty-select">Trudność</Label>
      <Select v-model="model.difficulty">
        <SelectTrigger>
          <SelectValue placeholder="Wybierz..." class="w-50" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem :value="null">Wszystkie</SelectItem>
          <SelectItem
            v-for="difficulty in ['easy', 'medium', 'hard']"
            :key="difficulty"
            :value="difficulty"
            :class="difficultyClasses[difficulty]"
          >
            {{ difficultyNames[difficulty] }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div class="space-y-2" v-if="allTags.length">
      <Label for="category-select">Kategorie</Label>
      <Select v-model="model.tag">
        <SelectTrigger>
          <SelectValue placeholder="Wybierz..." class="w-80" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem :value="null">Wszystkie</SelectItem>
          <SelectItem v-for="{ tag, count } in allTags" :key="tag" :value="tag"> {{ tag }} ({{ count }}) </SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div class="space-y-2">
      <Label for="search-input">Szukaj</Label>
      <Input class="w-80" v-model="model.search" />
    </div>
  </fieldset>
</template>
