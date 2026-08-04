import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 3',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#krotkie').uncheck();
    await page.locator('#poldlugie').check();
    await page.locator('#odkryj').click();

    await expect(page.locator('#wynik')).toHaveText('cena promocyjna: 30');
  },
};

export default test;
