<script setup lang="ts">
import { collections, type Collection } from '@repo/problems';
import { computed, onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseFooter from '@/components/BaseFooter.vue';
import BackLink from '@/components/BackLink.vue';
import ProblemFilters from '@/components/collection/ProblemFilters.vue';
import { useTitle } from '@vueuse/core';
import ProblemListItem from '@/components/collection/ProblemListItem.vue';

const props = defineProps<{ id: string }>();

const router = useRouter();
const collection = ref<Collection | null>(null);
useTitle(() => (collection.value ? `JS.03: ${collection.value.name}` : 'JS.03'));

const filters = ref<{ tag: string | null; difficulty: string | null; search: string }>({
  tag: null,
  difficulty: null,
  search: '',
});

const filteredProblems = computed(() => {
  let problems = Object.entries(collection.value?.problems ?? {}).map(
    ([id, problem], index) => [id, { ...problem, index }] as const,
  );
  problems = problems.filter(([, problem]) => !filters.value.tag || problem.tags.includes(filters.value.tag));
  problems = problems.filter(
    ([, problem]) => !filters.value.difficulty || problem.difficulty === filters.value.difficulty,
  );
  problems = problems.filter(([, problem]) => problem.title.toLowerCase().includes(filters.value.search.toLowerCase()));

  return problems;
});

onBeforeMount(async () => {
  collection.value = collections[props.id] ?? null;
  if (!collection.value) await router.push({ name: 'collectionList' });
});
</script>

<template>
  <div class="min-h-dvh flex">
    <div class="max-w-7xl w-full mx-auto px-6 pt-15 pb-10 flex flex-col">
      <div class="flex-1 mb-4">
        <template v-if="collection">
          <BackLink :to="{ name: 'collectionList' }"> Wróć do listy zbiorów zadań </BackLink>
          <h2 class="text-4xl font-bold my-3">{{ collection.name }}</h2>
          <p class="text-muted-foreground">{{ collection.description }}</p>

          <ProblemFilters :problems="collection.problems" v-model="filters" />

          <ul class="mb-5 space-y-2" v-if="filteredProblems.length">
            <ProblemListItem
              v-for="[id, problem] in filteredProblems"
              :key="id"
              :id="id"
              :problem="problem"
              :collection-id="props.id"
            />
          </ul>
          <div class="p-12 flex justify-center items-center bg-card border rounded-md" v-else>Brak zadań.</div>
        </template>
      </div>

      <BaseFooter />
    </div>
  </div>
</template>
