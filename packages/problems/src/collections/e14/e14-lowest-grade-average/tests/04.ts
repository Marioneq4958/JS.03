import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Najniższa średnia: Rysik',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#polak').fill('5.5');
    await page.locator('#nowak').fill('2.5');
    await page.locator('#rysik').fill('1');
    await page.locator('#wyznacz').click();

    await expect(page.locator('#wynik')).toHaveText('1');
  },
};

export default test;
