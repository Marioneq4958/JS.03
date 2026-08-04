import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Blur, sepia i negatyw',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#blur').check();
    await page.locator('#zastosuj1').click();
    await expect(page.locator('#obraz1')).toHaveCSS('filter', 'blur(6px)');

    await page.locator('#sepia').check();
    await page.locator('#zastosuj1').click();
    await expect(page.locator('#obraz1')).toHaveCSS('filter', 'sepia(100%)');

    await page.locator('#negatyw').check();
    await page.locator('#zastosuj1').click();
    await expect(page.locator('#obraz1')).toHaveCSS('filter', 'invert(100%)');
  },
};

export default test;
