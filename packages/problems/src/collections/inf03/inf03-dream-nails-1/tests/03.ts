import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Wzór',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#nawigacja-wzor').dispatchEvent('mouseover');

    await expect(page.locator('#nawigacja-kolor')).toHaveCSS('background-color', 'crimson');
    await expect(page.locator('#nawigacja-ksztalt')).toHaveCSS('background-color', 'crimson');
    await expect(page.locator('#nawigacja-wzor')).toHaveCSS('background-color', 'salmon');

    await expect(page.locator('#kolor-sekcja')).toHaveCSS('display', 'none');
    await expect(page.locator('#ksztalt-sekcja')).toHaveCSS('display', 'none');
    await expect(page.locator('#wzor-sekcja')).toHaveCSS('display', 'block');
  },
};

export default test;
