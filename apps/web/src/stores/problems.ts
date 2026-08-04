import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useProblemsStore = defineStore('problems', () => {
  const markedIds = useStorage<Map<string, { id: string; collectionId: string }>>('marked-problems', new Map());

  function getKey(id: string, collectionId: string) {
    return `${collectionId}/${id}`;
  }

  function markProblem(id: string, collectionId: string) {
    const key = getKey(id, collectionId);
    if (isMarked(id, collectionId)) markedIds.value.delete(key);
    else markedIds.value.set(key, { id, collectionId });
  }

  function isMarked(id: string, collectionId: string) {
    return markedIds.value.has(getKey(id, collectionId));
  }

  return { markProblem, isMarked };
});
