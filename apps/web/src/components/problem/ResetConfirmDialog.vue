<script setup lang="ts">
import { LucideRotateCw } from '@lucide/vue';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';

const emit = defineEmits<{ continue: [] }>();
</script>

<template>
  <AlertDialog>
    <Tooltip>
      <AlertDialogTrigger as-child>
        <TooltipTrigger as-child>
          <Button size="icon" variant="secondary">
            <LucideRotateCw />
          </Button>
        </TooltipTrigger>
        <TooltipContent> Zresetuj rozwiązanie </TooltipContent>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Czy na pewno chcesz zresetować rozwiązanie?</AlertDialogTitle>
          <AlertDialogDescription>Ta akcja jest nieodwracalna.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Anuluj</AlertDialogCancel>
          <AlertDialogAction @click="emit('continue')">Kontynuuj</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </Tooltip>
  </AlertDialog>
</template>
