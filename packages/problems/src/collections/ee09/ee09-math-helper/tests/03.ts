import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Mnożenie',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a').fill('4');
    await page.locator('#b').fill('5');
    await page.locator('#pomnoz').click();

    await expect(page.locator('#wynik')).toHaveText('Wynik: 20');
  },
};

export default test;
