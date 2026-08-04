import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Klikanie obrazów z panelu górnego',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const mainImage = page.locator('#pies-glowny');

    const firstImage = page.locator('#pies1');
    await firstImage.dispatchEvent('mouseover');
    await firstImage.click();
    await expect(firstImage).toHaveAttribute('src', 'pies1.jpg');
    await expect(mainImage).toHaveAttribute('src', 'pies1.jpg');

    const secondImage = page.locator('#pies2');
    await secondImage.dispatchEvent('mouseover');
    await secondImage.click();
    await expect(secondImage).toHaveAttribute('src', 'pies2.jpg');
    await expect(mainImage).toHaveAttribute('src', 'pies2.jpg');

    const thirdImage = page.locator('#pies3');
    await thirdImage.dispatchEvent('mouseover');
    await thirdImage.click();
    await expect(thirdImage).toHaveAttribute('src', 'pies3.jpg');
    await expect(thirdImage).toHaveAttribute('src', 'pies3.jpg');
  },
};

export default test;
