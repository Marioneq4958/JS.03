import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Obrazy',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const images = page.locator('img');

    await expect(images).toHaveCount(10);
    for (let i = 1; i <= 10; i++) {
      const img = images.nth(i - 1);

      await expect(img).toHaveAttribute('src', `${i}.jpg`);
      await expect(img).toHaveClass('wzory');
      await expect(img).toHaveAttribute('title', `${i}`);
    }
  },
};

export default test;
