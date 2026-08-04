import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Druga i trzecia sekcja',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#nastepna1').click();

    await expect(page.locator('#blok2')).toBeVisible();
    await expect(page.locator('#blok3')).toBeNonVisible();

    await page.locator('#nastepna2').click();

    await expect(page.locator('#blok2')).toBeNonVisible();
    await expect(page.locator('#blok3')).toBeVisible();
  },
};

export default test;
