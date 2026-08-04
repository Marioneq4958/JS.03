import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Cena zabiegów: 0');
  },
};

export default test;
