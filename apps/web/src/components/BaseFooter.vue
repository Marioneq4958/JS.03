<script setup lang="ts">
const buildDate = __BUILD_DATE__;
</script>

<template>
  <footer
    class="bg-accent shadow-xs shadow-accent mx-auto px-5 py-3 rounded-md w-max text-sm text-center [&>a]:hover:underline text-muted-foreground"
  >
    &copy; 2026 <br />
    Aplikacja stworzona przez <a href="https://github.com/Marioneq4958">Marioneq4958</a> <br />
    <a href="https://github.com/Marioneq4958/JS.03" target="_blank" class="font-medium">Github (AGPL v3)</a>
    <p v-if="buildDate">Zbudowano: {{ buildDate }}</p>
  </footer>
</template>
