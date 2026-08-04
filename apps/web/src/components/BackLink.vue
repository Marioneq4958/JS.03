<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';
import { LucideMoveLeft } from '@lucide/vue';

defineProps<{ to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric }>();
</script>

<template>
  <RouterLink
    :to="to"
    class="flex gap-3 text-sm items-center text-muted-foreground hover:text-foreground transition-colors hover"
  >
    <LucideMoveLeft class="size-4.5" />
    <slot />
  </RouterLink>
</template>
