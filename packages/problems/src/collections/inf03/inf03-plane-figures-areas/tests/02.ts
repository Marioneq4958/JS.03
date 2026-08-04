import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Obliczanie pola prostokąta',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#prostokat').click();
    await page.locator('#pole1').fill('5');
    await page.locator('#pole2').fill('10');
    await page.locator('#przycisk').click();
    await expect(page.locator('#wynik')).toHaveText('50');
  },
};

export default test;
