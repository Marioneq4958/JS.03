import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Przezroczystość',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#zakres3').fill('50');
    await page.locator('#zastosuj3').click();

    await expect(page.locator('#obraz3')).toHaveCSS('filter', 'opacity(50%)');
  },
};

export default test;
