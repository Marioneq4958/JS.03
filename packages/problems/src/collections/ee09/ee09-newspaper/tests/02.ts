import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Aktualności',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#btn-sport').click();

    await expect(page.locator('#art-sport')).toBeVisible();

    await page.locator('#btn-aktualnosci').click();

    await expect(page.locator('#art-aktualnosci')).toBeVisible();
    const otherArticles = ['#art-sport', '#art-kraj', '#art-ogloszenia'];
    await Promise.all(otherArticles.map((article) => expect(page.locator(article)).toBeNonVisible()));
  },
};

export default test;
