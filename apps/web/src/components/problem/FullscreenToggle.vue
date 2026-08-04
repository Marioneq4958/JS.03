<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
import { Button } from '../ui/button';
import { LucideMinimize, LucideMaximize } from '@lucide/vue';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen();
</script>

<template>
  <Tooltip>
    <TooltipTrigger>
      <Button size="icon" variant="secondary" @click="toggleFullscreen">
    <LucideMinimize v-if="isFullscreen" />
    <LucideMaximize v-else />
  </Button>
    </TooltipTrigger>
    <TooltipContent>
      {{ isFullscreen ? 'Wyłącz pełny ekran' : 'Pełny ekran' }}
    </TooltipContent>
  </Tooltip>
</template>
