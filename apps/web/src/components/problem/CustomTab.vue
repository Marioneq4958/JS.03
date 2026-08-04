<script setup lang="ts">
import { type Component } from 'vue';
import type { DockviewPanelApi } from 'dockview-vue';
defineProps<{
  params: { params: { icon: Component; title: string }, api: DockviewPanelApi };
}>();
</script>

<template>
  <component :is="params.params.icon" class="size-3.5" />
  {{ params.params.title }}
</template>
