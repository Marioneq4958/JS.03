import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw danych 2',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a1').fill('1');
    await page.locator('#r').fill('2');
    await page.locator('#n').fill('5');
    await page.locator('#przycisk').click();

    await expect(page.locator('#wynik')).toHaveText('Ciąg arytmetyczny zawiera wyrazy: 1, 3, 5, 7, 9');
  },
};

export default test;
