import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 4',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#dystans').fill('15');
    await page.locator('#spalanie').fill('35');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Potrzebujesz: 5.25 litrów paliwa');
  },
};

export default test;
