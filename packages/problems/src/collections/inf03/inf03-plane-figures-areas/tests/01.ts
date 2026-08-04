import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zmiana figury',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const selected = page.locator('#wybrana-figura');

    await page.locator('#prostokat').click();
    await expect(selected).toHaveAttribute('src', '2d.bmp');

    await page.locator('#trojkat').click();
    await expect(selected).toHaveAttribute('src', '1d.bmp');
  },
};

export default test;
