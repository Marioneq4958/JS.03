import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Kawa numer 4',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#numer-kawy').fill('4');
    await page.locator('#waga').fill('5');
    await page.locator('#zamow').click();

    await expect(page.locator('#wynik')).toHaveText('Koszt zamówienia wynosi: 0 zł');
  },
};

export default test;
