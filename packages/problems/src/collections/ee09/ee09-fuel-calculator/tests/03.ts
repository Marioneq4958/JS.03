import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Rodzaj 3',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#rodzaj').fill('3');
    await page.locator('#litry').fill('10');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('koszt paliwa: 0 zł');
  },
};

export default test;
