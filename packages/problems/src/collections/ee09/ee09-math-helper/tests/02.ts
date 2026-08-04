import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Odejmowanie',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a').fill('10');
    await page.locator('#b').fill('3');
    await page.locator('#odejmij').click();

    await expect(page.locator('#wynik')).toHaveText('Wynik: 7');
  },
};

export default test;
