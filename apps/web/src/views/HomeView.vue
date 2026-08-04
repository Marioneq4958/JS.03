<script setup lang="ts">
import BaseFooter from '@/components/BaseFooter.vue';
import { Button } from '@/components/ui/button';
import { LucideCheck, LucideChevronRight, LucideFileText, LucideLayoutGrid, LucidePlay } from '@lucide/vue';
</script>

<template>
  <div class="max-w-350 px-6 mx-auto pt-30 pb-5">
    <main class="mb-10">
      <header class="text-center flex justify-center flex-col gap-6 items-center mb-30">
        <h1
          class="bg-linear-to-b from-foreground to-muted-foreground/60 bg-clip-text text-center text-5xl font-extrabold leading-none text-transparent md:text-6xl lg:text-8xl"
        >
          Naucz się JavaScript'a na&nbsp;INF.03
        </h1>
        <p
          class="text-center text-foreground/80 lg:text-lg [&>strong]:font-medium [&>strong]:text-foreground max-w-8/12"
        >
          Rozwiązuj zadania na podstawie arkusz INF.03 w specjalnym środowisku w przeglądarce. Pisz kod, uruchamiaj
          testy i natychmiast sprawdzaj swoje wyniki.
        </p>
        <Button as-child size="lg">
          <RouterLink :to="{ name: 'collectionList' }">
            Rozpocznij
            <LucideChevronRight />
          </RouterLink>
        </Button>
        <img
          class="mt-12 mx-auto rounded-lg shadow-[0_50px_200px_75px] shadow-primary/10 md:mt-8 lg:mt-15 border aspect-1400/759"
          src="@/assets/screen.png"
          alt="Podgląd interfejsu aplikacji JS.03"
        />
      </header>

      <section class="my-20">
        <h2 class="text-5xl font-bold my-15 text-center">Jak to działa?</h2>
        <div class="flex justify-around" role="presentation">
          <div
            class="mx-auto size-12 text-center content-center bg-accent text-accent-foreground text-xl rounded-full border font-medium"
            v-for="i in 3"
            :key="i"
          >
            {{ i }}
          </div>
        </div>
        <ol class="flex text-center gap-10 mt-6">
          <li class="flex-1">
            <p class="text-3xl font-semibold mb-3">Wybierz zadanie</p>
            <p class="text-foreground/80 text-pretty">
              Przeglądaj zadania według poziomu trudności lub zagadnień np. obsługa najechania na element.
            </p>
          </li>
          <li class="flex-1">
            <p class="text-3xl font-semibold mb-3">Rozwiąż zadanie</p>
            <p class="text-foreground/80 text-pretty">
              Dostarczamy gotowy kod HTML i CSS, treść zadania oraz inne potrzebne materiały. Do dyspozycji masz
              środowisko z edytorem, który działa praktycznie tak samo jak Visual Studio Code.
            </p>
          </li>
          <li class="flex-1">
            <p class="text-3xl font-semibold mb-3">Uruchom testy lub podgląd</p>
            <p class="text-foreground/80 text-pretty">
              Kliknij "Uruchom testy". Każdy test pokaże Ci, co działa, a co wymaga poprawy. Możesz też manualnie
              sprawdzić działanie skryptu przez zakładkę "Podgląd" i przeglądając zasady oceniania.
            </p>
          </li>
        </ol>
      </section>

      <section class="my-20">
        <h2 class="text-5xl font-bold my-15 text-center">Najważniejsze funkcje</h2>
        <ul class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          <li class="bg-card border rounded-lg flex gap-5 col-start-1 col-end-2 lg:col-end-3 not-lg:flex-col">
            <div class="flex-2/5 p-8 pr-0">
              <div class="size-12 rounded-md bg-primary text-primary-foreground content-center">
                <LucideCheck class="mx-auto" />
              </div>
              <p class="text-3xl mb-3 mt-5 font-semibold">Testy</p>
              <p class="text-foreground/80 text-pretty">
                Dzięki testom przygotowanym do zadań, wstarczy jedno kliknięcie i wiesz czy Twoje rozwiązanie działa
                poprawnie.
              </p>
            </div>
            <div class="flex-3/5 w-full pr-8 not-lg:pl-8 pt-8">
              <img src="@/assets/tests.png" alt="Podgląd panelu testów" class="rounded-t-md block mx-auto" />
            </div>
          </li>
          <li class="bg-card border rounded-lg flex gap-5">
            <div class="p-8">
              <div class="size-12 rounded-md bg-primary text-primary-foreground content-center">
                <LucideLayoutGrid class="mx-auto" />
              </div>
              <p class="text-3xl mb-3 mt-5 font-semibold">Podział na zagadnienia i&nbsp;poziom trudności</p>
              <p class="text-foreground/80 text-pretty">
                Zadania zostały precyzyjne pogrupowane według konkretnych zagadnień jak np. obsługa najechania na
                element. Dodatkowo każde zadanie ma określony poziom trudności.
              </p>
            </div>
          </li>
          <li class="bg-card border rounded-lg flex flex-col justify-between gap-5">
            <div class="p-8 pb-0">
              <div class="size-12 rounded-md bg-primary text-primary-foreground content-center">
                <LucidePlay class="mx-auto" />
              </div>
              <p class="text-3xl mb-3 mt-5 font-semibold">Podgląd</p>
              <p class="text-foreground/80 text-pretty">
                Środowisko ma wbudowaną przeglądarkę, dzięki której szybko możesz sprawdzić działanie skryptu.
              </p>
            </div>
            <div class="px-8">
              <img src="@/assets/browser.png" alt="Podgląd okna przeglądarki" class="rounded-t-md mx-auto block" />
            </div>
          </li>
          <li
            class="bg-card border rounded-lg flex gap-5 col-start-1 lg:col-end-3 2xl:col-start-2 2xl:col-end-4 not-lg:flex-col"
          >
            <div class="flex-2/5 p-8 pr-0">
              <div class="size-12 rounded-md bg-primary text-primary-foreground content-center">
                <LucideFileText class="mx-auto" />
              </div>
              <p class="text-3xl mb-3 mt-5 font-semibold">Ściąga</p>
              <p class="text-foreground/80 text-pretty">
                Masz stały dostęp do uporządkowanego spisu najważniejszych pól, metod i właściwości DOM. Taką
                dokumentację pomocniczą możesz spotkać też w oficjalnym arkuszu, więc możesz oswoić się z jej układem.
              </p>
            </div>
            <div class="flex-3/5 w-full pr-8 not-lg:pl-8 pt-8">
              <img src="@/assets/cheat-sheet.png" alt="Podgląd ściągi DOM" class="rounded-t-md block mx-auto" />
            </div>
          </li>
        </ul>
      </section>
    </main>
    <BaseFooter />
  </div>
</template>
