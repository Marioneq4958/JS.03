import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dowóz poza Zieloną Górę',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba-kilometrow').fill('5');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Dowóz będzie Cię kosztował 10 złotych');
  },
};

export default test;
