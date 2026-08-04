import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Najniższa średnia: Polak',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#polak').fill('2');
    await page.locator('#nowak').fill('6');
    await page.locator('#rysik').fill('5');
    await page.locator('#wyznacz').click();

    await expect(page.locator('#wynik')).toHaveText('2');
  },
};

export default test;
