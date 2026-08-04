import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dzielenie',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a').fill('20');
    await page.locator('#b').fill('4');
    await page.locator('#podziel').click();

    await expect(page.locator('#wynik')).toHaveText('Wynik: 5');
  },
};

export default test;
