import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Najniższa średnia: Nowak',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#polak').fill('6');
    await page.locator('#nowak').fill('1.5');
    await page.locator('#rysik').fill('3');
    await page.locator('#wyznacz').click();

    await expect(page.locator('#wynik')).toHaveText('1.5');
  },
};

export default test;
