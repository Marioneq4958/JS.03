import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 2',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#react').check();
    await page.locator('#js').check();
    await page.locator('#raty').fill('5');
    await page.locator('#miasto').fill('Katowice');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText(
      'Kurs odbędzie się w Katowice. Koszt całkowity: 8000 zł. Płacisz 5 rat po 1600 zł',
    );
  },
};

export default test;
