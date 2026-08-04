import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Poprzedni obraz',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const nextBtn = page.locator('#nastepny');
    const mainImage = page.locator('#glowny-obraz');

    await nextBtn.click();
    await expect(mainImage).toHaveAttribute('src', '2.jpg');

    await nextBtn.click();
    await expect(mainImage).toHaveAttribute('src', '3.jpg');

    await nextBtn.click();
    await expect(mainImage).toHaveAttribute('src', '4.jpg');

    await nextBtn.click();
    await expect(mainImage).toHaveAttribute('src', '5.jpg');

    await nextBtn.click();
    await expect(mainImage).toHaveAttribute('src', '6.jpg');

    await nextBtn.click();
    await expect(mainImage).toHaveAttribute('src', '7.jpg');

    await nextBtn.click();
    await expect(mainImage).toHaveAttribute('src', '1.jpg');
  },
};

export default test;
