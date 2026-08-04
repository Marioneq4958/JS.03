import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Czarnobiały i kolorwy',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#czarnobialy').click();
    await expect(page.locator('#obraz2')).toHaveCSS('filter', 'grayscale(100%)');

    await page.locator('#kolorowy').click();
    await expect(page.locator('#obraz2')).toHaveCSS('filter', 'none');
  },
};

export default test;
