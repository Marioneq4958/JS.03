import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Następne',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '1.jpg');

    await page.locator('#next').click();
    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '2.jpg');

    await page.locator('#next').click();
    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '3.jpg');
  },
};

export default test;
