<script setup lang="ts">
import { useProblem } from '@/composables/problem';
import {
  LucideListCheck,
  LucideLoaderCircle,
  LucidePlay,
  LucideTable,
  LucideTestTube,
  LucideText,
} from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { DockviewVue, DockviewApi, type DockviewReadyEvent } from 'dockview-vue';
import ProblemContentPanel from '@/components/problem/ProblemContentPanel.vue';
import SolutionPanel from '@/components/problem/SolutionPanel.vue';
import PreviewPanel from '@/components/problem/PreviewPanel.vue';
import TestsPanel from '@/components/problem/TestsPanel.vue';
import CheatSheetPanel from '@/components/problem/CheatSheetPanel.vue';
import CustomTab from '@/components/problem/CustomTab.vue';
import type { DockviewTheme } from 'dockview-vue';

import 'dockview-vue/dist/styles/dockview.css';
import { ButtonGroup } from '@/components/ui/button-group';
import AnswerDialog from '@/components/problem/AnswerDialog.vue';
import ResetConfirmDialog from '@/components/problem/ResetConfirmDialog.vue';
import FullscreenToggle from '@/components/problem/FullscreenToggle.vue';
import MarkToggle from '@/components/problem/MarkToggle.vue';
import BackLink from '@/components/BackLink.vue';
import { useTitle } from '@vueuse/core';
import AssessmentCriteria from '@/components/problem/AssessmentCriteria.vue';

const props = defineProps<{ collectionId: string; problemId: string }>();
const { state: problem, setup, code, resetSolution } = useProblem();
useTitle(() => problem.value ? `JS.03: ${problem.value.problem.title}` : 'JS.03');

const panelComponents = {
  ProblemContentPanel,
  SolutionPanel,
  PreviewPanel,
  TestsPanel,
  CheatSheetPanel,
  AssessmentCriteria
};

const tabComponents = {
  CustomTab,
};

const leftPanels = {
  problem: {
    icon: LucideText,
    title: 'Treść zadania',
    componentName: 'ProblemContentPanel',
  },
  assessmentCriteria: {
    icon: LucideListCheck,
    title: 'Zasady oceniania',
    componentName: 'AssessmentCriteria',
    show: () => !!problem.value?.assessmentCriteria
  },
};

const rightPanels = {
  preview: {
    icon: LucidePlay,
    title: 'Podgląd',
    componentName: 'PreviewPanel',
  },
  tests: {
    icon: LucideTestTube,
    title: 'Testy',
    componentName: 'TestsPanel',
  },
  cheatSheet: {
    icon: LucideTable,
    title: 'Ściąga',
    componentName: 'CheatSheetPanel',
  },
};

const theme: DockviewTheme = {
  className: 'theme',
  name: 'theme',
  colorScheme: 'dark',
  gap: 8,
};

const dockviewApi = ref<DockviewApi | null>(null);

function onDockReady(event: DockviewReadyEvent) {
  const { api } = event;
  dockviewApi.value = api;

  const leftGroup = api.addEdgeGroup('left', { id: 'left', initialSize: 650, minimumSize: 300 });

  Object.entries(leftPanels).reverse().filter(([, panel]) => !('show' in panel) || panel.show()).forEach(([id, panel]) => {
    api.addPanel({
      id,
      component: panel.componentName,
      position: { referenceGroup: leftGroup.id },
      inactive: id !== 'problem',
      params: { ...panel },
    });
  });

  const rightGroup = api.addEdgeGroup('right', { id: 'right', collapsed: true, initialSize: 500, minimumSize: 300 });

  Object.entries(rightPanels).forEach(([id, panel]) => {
    api.addPanel({
      id,
      component: panel.componentName,
      position: { referenceGroup: rightGroup.id },
      inactive: true,
      params: { ...panel },
    });
  });

  const centerGroup = api.addGroup({
    locked: true,
    direction: 'left',
    hideHeader: true,
  });
  api.addPanel({
    id: 'solution',
    component: 'SolutionPanel',
    title: 'Rozwiązanie',
    position: { referenceGroup: centerGroup.id },
  });

  api.onWillDragPanel((event) => {
    if (event.panel.id === 'solution') event.nativeEvent.preventDefault();
  });

  api.onWillShowOverlay((event) => {
    if (event.group?.id !== 'left' && event.group?.id !== 'right') event.preventDefault();
  });
}

onMounted(() => setup(props.collectionId, props.problemId));

function openAnswerAsSolution() {
  if (problem.value) code.value = problem.value.exampleSolution;
}
</script>

<template>
  <div class="h-dvh py-2 flex flex-col" v-if="problem">
    <header class="mb-1.5 pt-2.5 pb-2 px-11 flex gap-5 items-center">
      <BackLink :to="{ name: 'collection', params: { id: props.collectionId } }"> Zamknij zadanie </BackLink>
      <p class="text-sm">
        <span class="text-muted-foreground">{{ problem.collection.name }}: </span>
        <span>{{ problem.problem.title }}</span>
      </p>
      <div class="flex-1 flex justify-end gap-3">
        <ButtonGroup>
          <ResetConfirmDialog @continue="resetSolution" />
          <MarkToggle />
          <AnswerDialog :example-solution="problem.exampleSolution" @open-as-solution="openAnswerAsSolution" />
        </ButtonGroup>
        <ButtonGroup>
          <FullscreenToggle />
        </ButtonGroup>
      </div>
    </header>
    <main class="flex items-stretch gap-2 flex-1 overflow-hidden">
      <DockviewVue
        class="dockview-theme-dark flex-1"
        @ready="onDockReady"
        :components="panelComponents as any"
        :tab-components="tabComponents as any"
        disable-floating-groups
        :dnd-edges="false"
        :theme="theme"
        default-tab-component="CustomTab"
      />
    </main>
  </div>
  <div v-else class="w-screen h-dvh items-center justify-center flex gap-3 text-sm">
    <LucideLoaderCircle class="size-4 animate-spin animation-duration-600!" />
    <span>Wczytywanie zadania...</span>
  </div>
</template>
