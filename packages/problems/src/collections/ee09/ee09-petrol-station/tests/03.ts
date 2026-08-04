import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 3',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#dystans').fill('50');
    await page.locator('#spalanie').fill('30');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Potrzebujesz: 15 litrów paliwa');
  },
};

export default test;
