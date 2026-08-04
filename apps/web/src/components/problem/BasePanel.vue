<script setup lang="ts">
import { LucideX } from '@lucide/vue';

defineProps<{ onClose?: () => void; title: string }>();
</script>

<template>
  <section class="contents">
    <header class="bg-accent text-sm font-medium px-2.25 py-1.25 flex justify-between">
      {{ title }}
      <button v-if="onClose" @click="onClose && onClose()" class="cursor-pointer">
        <LucideX class="size-3.5" />
      </button>
    </header>
    <slot />
  </section>
</template>
