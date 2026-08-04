<script setup lang="ts">
import { useProblemContext } from '@/composables/problem';
import { onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue';
import { monaco, patchedMonaco } from '@/monaco-setup';

import { useMonacoEx } from 'monaco-editor-ex';
import BasePanel from './BasePanel.vue';
import { emmetHTML } from 'emmet-monaco-es';
import { createHighlighterCore } from '@shikijs/core';
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript';

import langHtml from '@shikijs/langs/html';
import langCss from '@shikijs/langs/css';
import langJs from '@shikijs/langs/javascript';
import themeDarkPlus from '@shikijs/themes/dark-plus';
import { shikiToMonaco } from '@shikijs/monaco';
import { LucideLoaderCircle } from '@lucide/vue';

const { state, code } = useProblemContext();
const editorContainerRef = useTemplateRef('editor-container');
const ready = ref(false);

let editor: monaco.editor.IStandaloneCodeEditor;
let model: monaco.editor.IModel;

monaco.languages.registerCompletionItemProvider('html', {
  triggerCharacters: ['"', "'", '/', ' '],
  provideCompletionItems: (model: monaco.editor.ITextModel, position: monaco.Position) => {
    const lineContent = model.getLineContent(position.lineNumber);
    const textBeforeCursor = lineContent.substring(0, position.column - 1);

    const isPath = /href=["']|src=["']/i.test(textBeforeCursor);
    if (!isPath) return { suggestions: [] };

    const wordInfo = model.getWordAtPosition(position);
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: wordInfo ? wordInfo.startColumn : position.column,
      endColumn: wordInfo ? wordInfo.endColumn : position.column,
    };

    return {
      suggestions: Object.keys(state.value.assets).map((file) => ({
        label: file,
        kind: monaco.languages.CompletionItemKind.File,
        insertText: file,
        range: range,
      })),
    };
  },
});


if (themeDarkPlus.colors) themeDarkPlus.colors['editor.background'] = 'var(--color-card)';

useMonacoEx(patchedMonaco);
const disposeEmmet = emmetHTML(patchedMonaco, ['html'], { tokenizer: 'standard' });
const highlighterPromise = (async () => {
  const highlighter = await createHighlighterCore({
    themes: [themeDarkPlus],
    langs: [langHtml, langCss, langJs],
    engine: createJavaScriptRegexEngine(),
  });


  shikiToMonaco(highlighter, monaco);
})();

const foldStyleSection = async (editor: monaco.editor.IStandaloneCodeEditor, model: monaco.editor.IModel) => {
  const content = model.getValue();
  const styleMatch = content.match(/<style[^>]*>/);
  if (!styleMatch || styleMatch.index === undefined) return;

  const lineNumber = content.slice(0, styleMatch.index).split('\n').length;
  const foldingController = editor.getContribution('editor.contrib.folding') as unknown as {
    getFoldingModel(): Promise<{
      getRegionAtLine(lineNumber: number): unknown;
      toggleCollapseState(regions: unknown[]): void;
      onDidChange(listener: () => void): { dispose(): void };
    } | null>;
  };
  if (!foldingController) return;

  const foldingModel = await foldingController.getFoldingModel();
  if (!foldingModel) return;

  const region = foldingModel.getRegionAtLine(lineNumber);
  if (region) {
    foldingModel.toggleCollapseState([region]);
    return;
  }

  await new Promise<void>((resolve) => {
    const disposable = foldingModel.onDidChange(() => {
      const asyncRegion = foldingModel.getRegionAtLine(lineNumber);
      if (asyncRegion) {
        foldingModel.toggleCollapseState([asyncRegion]);
        disposable.dispose();
        resolve();
      }
    });
  });
};

onMounted(async () => {
  if (!editorContainerRef.value) throw new Error('Editor container not found.');

  await highlighterPromise;

  model = monaco.editor.createModel(code.value, 'html');
  editor = monaco.editor.create(editorContainerRef.value, {
    model,
    theme: 'dark-plus',
    minimap: { enabled: false },
    fontSize: 13,
    fontFamily: 'var(--font-mono)',
    tabSize: 2,
    cursorBlinking: 'expand',
    mouseWheelZoom: true,
    automaticLayout: true,
  });

  model.onDidChangeContent(() => {
    code.value = model.getValue();
  });

  watch(code, (value) => {
    if (model.getValue() === value) return;
    model.setValue(value);
    foldStyleSection(editor, model);
  });

  await foldStyleSection(editor, model);
  ready.value = true;
});

onUnmounted(() => {
  editor.dispose();
  model.dispose();
  disposeEmmet();
});
</script>

<template>
  <BasePanel title="Rozwiązanie">
    <div class="flex-1 flex justify-center items-center gap-3 text-sm" v-show="!ready">
      <LucideLoaderCircle class="size-4.5 animate-spin" />
      Wczytywanie edytora...
    </div>
    <div class="flex-1" ref="editor-container" v-show="ready" />
  </BasePanel>
</template>
