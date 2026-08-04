import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Miniatury',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#miniatura4').click();
    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '4.jpg');

    await page.locator('#miniatura2').click();
    await expect(page.locator('#glownyObraz')).toHaveAttribute('src', '2.jpg');
  },
};

export default test;
