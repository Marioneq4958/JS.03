import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Kawa numer 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#numer-kawy').fill('1');
    await page.locator('#waga').fill('1');
    await page.locator('#zamow').click();

    await expect(page.locator('#wynik')).toHaveText('Koszt zamówienia wynosi: 5 zł');
  },
};

export default test;
