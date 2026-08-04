import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Drugi i trzeci cytat',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#cytat1').click();
    await page.locator('#cytat2').click();

    await expect(page.locator('#cytat2')).toBeNonVisible();
    await expect(page.locator('#cytat3')).toBeVisible();
  },
};

export default test;
