import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Trzeci i pierwszy cytat',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#cytat1').click();
    await page.locator('#cytat2').click();
    await page.locator('#cytat3').click();

    await expect(page.locator('#cytat3')).toBeNonVisible();
    await expect(page.locator('#cytat1')).toBeVisible();
  },
};

export default test;
