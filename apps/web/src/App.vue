<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { LucideLoaderCircle } from '@lucide/vue';
import { TooltipProvider } from './components/ui/tooltip';

const router = useRouter();
const isPageLoading = ref(false);

router.beforeEach(() => {
  isPageLoading.value = true;
});
router.afterEach(() => {
  isPageLoading.value = false;
});
</script>

<template>
  <TooltipProvider>
    <div
      v-if="isPageLoading"
      class="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3 text-sm z-50"
    >
      <LucideLoaderCircle class="size-5 animate-spin" />
      <span>Ładowanie...</span>
    </div>
    <div class="relative min-h-dvh bg-background overflow-x-hidden">
      <RouterView v-slot="{ Component, route }">
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-x-10"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 translate-x-10"
        >
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </div>
  </TooltipProvider>
</template>
