import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Ikona',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const icon = page.locator('#ikona');
    await expect(icon).toHaveAttribute('src', 'icon-off.png');

    await icon.click();
    await expect(icon).toHaveAttribute('src', 'icon-on.png');

    await icon.click();
    await expect(icon).toHaveAttribute('src', 'icon-off.png');
  },
};

export default test;
