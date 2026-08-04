import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dane 3',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#ksztalt').fill('3');
    await page.locator('#r').fill('255');
    await page.locator('#g').fill('192');
    await page.locator('#b').fill('203');
    await page.locator('#zamow').click();

    await expect(page.locator('#wynik')).toHaveText('Zamówiłeś żelka: serce');
    await expect(page.locator('#wybranyKolor')).toHaveCSS('background-color', 'rgb(255, 192, 203)');
  },
};

export default test;
