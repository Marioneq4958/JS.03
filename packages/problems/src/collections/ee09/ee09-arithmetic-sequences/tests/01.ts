import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw danych 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#a1').fill('40');
    await page.locator('#r').fill('3');
    await page.locator('#n').fill('9');
    await page.locator('#przycisk').click();

    await expect(page.locator('#wynik')).toHaveText(
      'Ciąg arytmetyczny zawiera wyrazy: 40, 43, 46, 49, 52, 55, 58, 61, 64',
    );
  },
};

export default test;
