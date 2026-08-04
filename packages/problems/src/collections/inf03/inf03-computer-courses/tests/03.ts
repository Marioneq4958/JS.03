import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 3',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#js').check();
    await page.locator('#raty').fill('3');
    await page.locator('#miasto').fill('Gdańsk');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText(
      'Kurs odbędzie się w Gdańsk. Koszt całkowity: 3000 zł. Płacisz 3 rat po 1000 zł',
    );
  },
};

export default test;
