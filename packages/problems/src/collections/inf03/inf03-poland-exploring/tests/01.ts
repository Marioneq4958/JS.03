import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Następny obraz',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const previousBtn = page.locator('#poprzedni');
    const mainImage = page.locator('#glowny-obraz');

    await previousBtn.click();
    await expect(mainImage).toHaveAttribute('src', '7.jpg');

    await previousBtn.click();
    await expect(mainImage).toHaveAttribute('src', '6.jpg');

    await previousBtn.click();
    await expect(mainImage).toHaveAttribute('src', '5.jpg');

    await previousBtn.click();
    await expect(mainImage).toHaveAttribute('src', '4.jpg');

    await previousBtn.click();
    await expect(mainImage).toHaveAttribute('src', '3.jpg');

    await previousBtn.click();
    await expect(mainImage).toHaveAttribute('src', '2.jpg');

    await previousBtn.click();
    await expect(mainImage).toHaveAttribute('src', '1.jpg');
  },
};

export default test;
