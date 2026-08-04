import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Kraj',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#btn-kraj').click();

    await expect(page.locator('#art-kraj')).toBeVisible();
    const otherArticles = ['#art-sport', '#art-aktualnosci', '#art-ogloszenia'];
    await Promise.all(otherArticles.map((article) => expect(page.locator(article)).toBeNonVisible()));
  },
};

export default test;
