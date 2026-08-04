<script setup lang="ts">
import type { Log } from '@repo/testing';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { LucideCheck, LucideX } from '@lucide/vue';

defineProps<{
  test: {
    index: number;
    logs: Log[];
    error: string | null;
    name: string;
  };
}>();
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>Test {{ test.index + 1 }}: {{ test.name }}</DialogTitle>
      </DialogHeader>
      <div>
        <div class="font-medium mb-2">Wynik</div>
        <div class="mb-3 flex gap-2 items-center border rounded-md bg-secondary p-3">
          <template v-if="!test.error">
            <LucideCheck class="text-green-600 size-6.5" />
            Test zaliczony
          </template>
          <template v-else>
            <LucideX class="text-red-600 size-6.5" />
            Test niezaliczony
          </template>
        </div>
        <div class="font-medium mb-2">Przebieg testu</div>
        <div class="border rounded-md overflow-hidden mb-3">
          <table class="w-full">
            <thead>
              <tr>
                <th class="px-2.5 py-2 text-left font-medium bg-secondary">Zdarzenie</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in test.logs" :key="index" class="border-b last:border-none">
                <td class="px-2.5 py-2">{{ entry.message }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <template v-if="test.error">
          <div class="font-medium mb-2">Treść błędu</div>
          <div class="bg-red-800/20 text-red-300 p-3 rounded-md text-sm whitespace-pre-line">
            {{ test.error }}
          </div>
        </template>
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline">Zamknij</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
