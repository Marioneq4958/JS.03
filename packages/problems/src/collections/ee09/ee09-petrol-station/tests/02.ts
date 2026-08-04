import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 2',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#dystans').fill('25');
    await page.locator('#spalanie').fill('30');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Potrzebujesz: 7.5 litrów paliwa');
  },
};

export default test;
