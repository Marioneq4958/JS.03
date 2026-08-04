<script setup lang="ts">
import BaseFooter from '@/components/BaseFooter.vue';
import { collections } from '@repo/problems';
import CollectionCard from '@/components/collection-list/CollectionCard.vue';
import BackLink from '@/components/BackLink.vue';
</script>

<template>
  <div class="min-h-dvh flex">
    <div class="max-w-7xl w-full mx-auto px-6 pt-15 pb-10 flex flex-col">
      <div class="flex-1 mb-4">
        <BackLink :to="{ name: 'home' }">
          Wróć na stronę główną
        </BackLink>
        <h2 class="text-4xl font-semibold my-3">Zbiory zadań</h2>
        <ul class="mt-5 grid md:grid-cols-2 gap-3">
          <CollectionCard
            v-for="[id, collection] in Object.entries(collections)"
            :key="id"
            :id="id"
            :collection="collection"
          />
        </ul>
      </div>
      <BaseFooter />
    </div>
  </div>
</template>
