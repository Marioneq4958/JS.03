import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Kawa numer 3',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#numer-kawy').fill('3');
    await page.locator('#waga').fill('20');
    await page.locator('#zamow').click();

    await expect(page.locator('#wynik')).toHaveText('Koszt zamówienia wynosi: 120 zł');
  },
};

export default test;
