import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Pierwszy i drugi cytat',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await expect(page.locator('#cytat1')).toBeVisible();
    await expect(page.locator('#cytat2')).toBeNonVisible();

    await page.locator('#cytat1').click();

    await expect(page.locator('#cytat1')).toBeNonVisible();
    await expect(page.locator('#cytat2')).toBeVisible();
  },
};

export default test;
