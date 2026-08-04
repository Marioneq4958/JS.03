import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Obliczanie pola trójkąta',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#pole1').fill('7');
    await page.locator('#pole2').fill('8');
    await page.locator('#przycisk').click();
    await expect(page.locator('#wynik')).toHaveText('28');
  },
};

export default test;
