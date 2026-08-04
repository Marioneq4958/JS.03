import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Jasność',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#zakres4').fill('150');
    await page.locator('#zastosuj4').click();

    await expect(page.locator('#obraz4')).toHaveCSS('filter', 'brightness(150%)');
  },
};

export default test;
