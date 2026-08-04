import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dane 2',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#ksztalt').fill('2');
    await page.locator('#r').fill('0');
    await page.locator('#g').fill('255');
    await page.locator('#b').fill('0');
    await page.locator('#zamow').click();

    await expect(page.locator('#wynik')).toHaveText('Zamówiłeś żelka: żabka');
    await expect(page.locator('#wybranyKolor')).toHaveCSS('background-color', 'rgb(0, 255, 0)');
  },
};

export default test;
