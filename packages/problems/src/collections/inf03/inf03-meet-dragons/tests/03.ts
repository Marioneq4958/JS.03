import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Galeria',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#nawigacja-galeria').click();

    await expect(page.locator('#nawigacja-baza')).toHaveCSS('background-color', '#FFAEA5');
    await expect(page.locator('#nawigacja-opisy')).toHaveCSS('background-color', '#FFAEA5');
    await expect(page.locator('#nawigacja-galeria')).toHaveCSS('background-color', 'mistyrose');

    await expect(page.locator('#baza-sekcja')).toHaveCSS('display', 'none');
    await expect(page.locator('#opisy-sekcja')).toHaveCSS('display', 'none');
    await expect(page.locator('#galeria-sekcja')).toHaveCSS('display', 'block');
  },
};

export default test;
