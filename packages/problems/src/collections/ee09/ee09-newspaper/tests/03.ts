import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Ogłoszenia',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#btn-ogloszenia').click();

    await expect(page.locator('#art-ogloszenia')).toBeVisible();
    const otherArticles = ['#art-sport', '#art-aktualnosci', '#art-kraj'];
    await Promise.all(otherArticles.map((article) => expect(page.locator(article)).toBeNonVisible()));
  },
};

export default test;
