import { collections, type Collection, type Problem } from '@repo/problems';
import type { ProblemTest } from '@repo/testing';
import { computed, inject, provide, ref, type Component, type ComputedRef, type InjectionKey, type Ref } from 'vue';

export interface ProblemState {
  id: string;
  collectionId: string;
  collection: Collection;
  problem: Problem;
  template: string;
  tests: ProblemTest[];
  assets: Record<string, string>;
  content: Component;
  exampleSolution: string;
  assessmentCriteria?: Component;
}

interface ProblemContext {
  state: ComputedRef<ProblemState>;
  code: Ref<string>;
}

const ProblemContextKey: InjectionKey<ProblemContext> = Symbol('ProblemContextKey');

export const useProblem = () => {
  const state = ref<ProblemState | null>(null);
  const code = ref('');

  async function setup(collectionId: string, problemId: string) {
    const collection = collections[collectionId] ?? null;
    if (!collection) throw new Error('Collection not found.');

    const problem = collection.problems[problemId] ?? null;
    if (!problem) throw new Error('Problem not found.');

    const data = await problem.data();

    state.value = {
      id: problemId,
      collectionId,
      collection,
      problem,
      template: data.template,
      exampleSolution: data.solution,
      content: data.content,
      assets: data.assets ?? {},
      tests: data.tests,
      assessmentCriteria: data.assessmentCriteria,
    };
    code.value = data.template;
  }

  function resetSolution() {
    if (!state.value) throw new Error('Problem state not initialized yet!');
    code.value = state.value.template ?? '';
  }

  provide(ProblemContextKey, {
    state: computed(() => {
      if (!state.value) throw new Error('Problem state not initialized yet!');
      return state.value;
    }),
    code,
  });

  return { state, code, setup, resetSolution };
};

export function useProblemContext() {
  const context = inject(ProblemContextKey);
  if (!context) {
    throw new Error('useProblemContext must be used within a component providing Problem');
  }
  return context;
}
