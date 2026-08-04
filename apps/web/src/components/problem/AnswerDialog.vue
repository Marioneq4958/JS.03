<script setup lang="ts">
import { LucideListCheck } from '@lucide/vue';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import AnswerDialogEditor from './AnswerDialogEditor.vue';

defineProps<{ exampleSolution: string }>();
const emit = defineEmits<{ openAsSolution: [] }>();
</script>

<template>
  <Dialog>
    <Tooltip>
      <DialogTrigger as-child>
        <TooltipTrigger as-child>
          <Button size="icon" variant="secondary">
            <LucideListCheck />
          </Button>
        </TooltipTrigger>
        <TooltipContent> Zobacz przykładową odpowiedź </TooltipContent>
      </DialogTrigger>
      <DialogContent class="w-full max-w-6xl! overflow-y-auto max-h-dvh">
        <DialogHeader>
          <DialogTitle>Przykładowa odpowiedź</DialogTitle>
        </DialogHeader>
        <AnswerDialogEditor :example-solution="exampleSolution" />
        <DialogFooter>
          <DialogClose as-child>
            <Button variant="outline" @click="emit('openAsSolution')">Otwórz jako rozwiązanie</Button>
          </DialogClose>
          <DialogClose as-child>
            <Button variant="outline">Zamknij</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Tooltip>
  </Dialog>
</template>
