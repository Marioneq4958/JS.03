import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dodawanie',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a').fill('5');
    await page.locator('#b').fill('3');
    await page.locator('#dodaj').click();

    await expect(page.locator('#wynik')).toHaveText('Wynik: 8');
  },
};

export default test;
