import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Poprzednie',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '1.jpg');

    await page.locator('#prev').click();
    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '5.jpg');

    await page.locator('#prev').click();
    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '4.jpg');
  },
};

export default test;
