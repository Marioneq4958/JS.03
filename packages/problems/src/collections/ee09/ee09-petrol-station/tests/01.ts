import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#dystans').fill('10');
    await page.locator('#spalanie').fill('10');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Potrzebujesz: 1 litrów paliwa');
  },
};

export default test;
