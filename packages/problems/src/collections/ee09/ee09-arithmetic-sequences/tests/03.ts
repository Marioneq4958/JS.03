import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw danych 3',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a1').fill('10');
    await page.locator('#r').fill('-2');
    await page.locator('#n').fill('4');
    await page.locator('#przycisk').click();

    await expect(page.locator('#wynik')).toHaveText('Ciąg arytmetyczny zawiera wyrazy: 10, 8, 6, 4');
  },
};

export default test;
