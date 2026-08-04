import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Sport',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#btn-sport').click();

    await expect(page.locator('#art-sport')).toBeVisible();
    const otherArticles = ['#art-ogloszenia', '#art-aktualnosci', '#art-kraj'];
    await Promise.all(otherArticles.map((article) => expect(page.locator(article)).toBeNonVisible()));
  },
};

export default test;
