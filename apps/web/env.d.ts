/// <reference types="vite/client" />

declare module '*.md' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare const __BUILD_DATE__: string;

declare module 'monaco-editor-ex' {
  export function useMonacoEx(monaco: unknown): void;
}

declare module 'monaco-editor/esm/vs/editor/editor.api' {
  export * from 'monaco-editor';
}

declare module 'monaco-editor/esm/vs/language/html/monaco.contribution.js';
declare module 'monaco-editor/esm/vs/language/css/monaco.contribution.js';
declare module 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';
