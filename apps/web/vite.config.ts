import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';
import Markdown from 'unplugin-vue-markdown/vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import Shiki from '@shikijs/markdown-it';

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueDevTools(),
    tailwindcss(),
    Markdown({
      async markdownItSetup(md) {
        md.use(
          (await Shiki({
            themes: {
              light: 'dark-plus',
            },
          })) as unknown as (markdownIt: unknown) => void,
        );
      },
    }),
    (monacoEditorPlugin as unknown as { default: (options: unknown) => unknown }).default({
      languageWorkers: ['css', 'editorWorkerService', 'html', 'typescript'],
    }),
  ],
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toLocaleString('pl-PL')),
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
});
