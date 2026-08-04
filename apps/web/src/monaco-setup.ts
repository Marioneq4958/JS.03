// monaco-setup.ts
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

// Polish
import 'monaco-editor/esm/nls.messages.pl.js';

// Wymagane kontrybucje (Monaco features)
import 'monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js';
import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js';
import 'monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js';
import 'monaco-editor/esm/vs/editor/contrib/hover/browser/hoverContribution.js';
import 'monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js';
import 'monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorPickerContribution.js';
import 'monaco-editor/esm/vs/editor/contrib/find/browser/findController.js';
// Auto-zamykanie i dopasowywanie nawiasów
import 'monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.js';

// monaco-setup.ts

import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js';

// Języki wbudowane
import * as monacoHtml from 'monaco-editor/esm/vs/language/html/monaco.contribution.js';
import * as monacoCss from 'monaco-editor/esm/vs/language/css/monaco.contribution.js';
import * as monacoTypescript from 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';

// Patchowanie obiektów dla monaco-editor-ex
const patchedLanguages = Object.create(monaco.languages);
Object.defineProperty(patchedLanguages, 'html', { value: monacoHtml, writable: true, configurable: true });
Object.defineProperty(patchedLanguages, 'css', { value: monacoCss, writable: true, configurable: true });
Object.defineProperty(patchedLanguages, 'typescript', { value: monacoTypescript, writable: true, configurable: true });

const patchedMonaco = Object.create(monaco);
Object.defineProperty(patchedMonaco, 'languages', { value: patchedLanguages, writable: true, configurable: true });
Object.defineProperty(patchedMonaco, 'html', { value: monacoHtml, writable: true, configurable: true });
Object.defineProperty(patchedMonaco, 'css', { value: monacoCss, writable: true, configurable: true });
Object.defineProperty(patchedMonaco, 'typescript', { value: monacoTypescript, writable: true, configurable: true });

export { monaco, patchedMonaco };
