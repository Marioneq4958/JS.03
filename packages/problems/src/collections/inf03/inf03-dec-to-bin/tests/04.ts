import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Liczba 0',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba').fill('0');
    await page.locator('#przelicz').click();
    await expect(page.locator('#wynik')).toHaveHTML('0<sub>(2)</sub>');
  },
};

export default test;
