import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Potęgowanie',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a').fill('2');
    await page.locator('#b').fill('8');
    await page.locator('#potega').click();

    await expect(page.locator('#wynik')).toHaveText('Wynik: 256');
  },
};

export default test;
