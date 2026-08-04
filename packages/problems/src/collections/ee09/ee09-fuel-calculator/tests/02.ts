import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Rodzaj 2',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#rodzaj').fill('2');
    await page.locator('#litry').fill('5');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('koszt paliwa: 17.5 zł');
  },
};

export default test;
