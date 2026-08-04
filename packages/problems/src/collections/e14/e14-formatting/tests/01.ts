import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Kolor tekstu',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const paragraph = page.locator('#paragraf');

    await page.locator('#czerwony').click();
    await expect(paragraph).toHaveCSS('color', 'red');

    await page.locator('#zielony').click();
    await expect(paragraph).toHaveCSS('color', 'green');

    await page.locator('#niebieski').click();
    await expect(paragraph).toHaveCSS('color', 'blue');
  },
};

export default test;
