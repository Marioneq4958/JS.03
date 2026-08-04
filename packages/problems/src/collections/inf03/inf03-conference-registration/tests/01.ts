import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Pierwsza i druga sekcja',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await expect(page.locator('#blok1')).toBeVisible();
    await expect(page.locator('#blok2')).toBeNonVisible();

    await page.locator('#nastepna1').click();

    await expect(page.locator('#blok1')).toBeNonVisible();
    await expect(page.locator('#blok2')).toBeVisible();
  },
};

export default test;
