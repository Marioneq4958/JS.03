import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Rodzaj 4',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#rodzaj').fill('1');
    await page.locator('#litry').fill('0');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('koszt paliwa: 0 zł');
  },
};

export default test;
