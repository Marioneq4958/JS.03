import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#krotkie').check();
    await page.locator('#odkryj').click();

    await expect(page.locator('#wynik')).toHaveText('cena promocyjna: 15');
  },
};

export default test;
