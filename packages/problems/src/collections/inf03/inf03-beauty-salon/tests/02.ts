import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 2',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#peeling').check();
    await page.locator('#maska').check();
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Cena zabiegów: 75');
  },
};

export default test;
