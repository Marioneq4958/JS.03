import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dane 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#ksztalt').fill('1');
    await page.locator('#r').fill('255');
    await page.locator('#g').fill('0');
    await page.locator('#b').fill('0');
    await page.locator('#zamow').click();

    await expect(page.locator('#wynik')).toHaveText('Zamówiłeś żelka: miś');
    await expect(page.locator('#wybranyKolor')).toHaveCSS('background-color', 'rgb(255, 0, 0)');
  },
};

export default test;
