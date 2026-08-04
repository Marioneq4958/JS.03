<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { monaco, patchedMonaco } from '@/monaco-setup';

import { useMonacoEx } from 'monaco-editor-ex';
import { createHighlighterCore } from '@shikijs/core';
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript';

import langHtml from '@shikijs/langs/html';
import langCss from '@shikijs/langs/css';
import langJs from '@shikijs/langs/javascript';
import themeDarkPlus from '@shikijs/themes/dark-plus';
import { shikiToMonaco } from '@shikijs/monaco';

const props = defineProps<{ exampleSolution: string }>();

const editorContainerRef = useTemplateRef('example-solution-container');

let editor: monaco.editor.IStandaloneCodeEditor;

if (themeDarkPlus.colors) themeDarkPlus.colors['editor.background'] = 'var(--color-card)';

useMonacoEx(patchedMonaco);
const highlighterPromise = (async () => {
  const highlighter = await createHighlighterCore({
    themes: [themeDarkPlus],
    langs: [langHtml, langCss, langJs],
    engine: createJavaScriptRegexEngine(),
  });

  shikiToMonaco(highlighter, monaco);
})();

onMounted(async () => {
  if (!editorContainerRef.value) throw new Error('Editor container not found.');

  await highlighterPromise;

  editor = monaco.editor.create(editorContainerRef.value, {
    theme: 'dark-plus',
    minimap: { enabled: false },
    fontSize: 13,
    fontFamily: 'var(--font-mono)',
    tabSize: 2,
    cursorBlinking: 'expand',
    mouseWheelZoom: true,
    automaticLayout: true,
    value: props.exampleSolution,
    language: 'html'
  });
});

onUnmounted(() => {
  editor.dispose();
});
</script>

<template>
  <div class="flex-1 min-h-[70dvh] w-full" ref="example-solution-container"  />
</template>

