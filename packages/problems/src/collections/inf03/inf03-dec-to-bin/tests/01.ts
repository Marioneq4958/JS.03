import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Liczba 537',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba').fill('537');
    await page.locator('#przelicz').click();
    await expect(page.locator('#wynik')).toHaveHTML('10 0001 1001<sub>(2)</sub>');
  },
};

export default test;
