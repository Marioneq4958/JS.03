import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#react').check();
    await page.locator('#raty').fill('10');
    await page.locator('#miasto').fill('Warszawa');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText(
      'Kurs odbędzie się w Warszawa. Koszt całkowity: 5000 zł. Płacisz 10 rat po 500 zł',
    );
  },
};

export default test;
