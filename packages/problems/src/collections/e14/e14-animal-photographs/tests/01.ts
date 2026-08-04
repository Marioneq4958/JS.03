import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Najeżdżanie na obrazy z panelu górnego',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    // First image
    const firstImage = page.locator('#pies1');

    await expect(firstImage).toHaveAttribute('src', 'pies1.jpg');

    await firstImage.dispatchEvent('mouseover');
    await expect(firstImage).toHaveAttribute('src', 'pies1-odbicie.jpg');

    await firstImage.dispatchEvent('mouseout');
    await expect(firstImage).toHaveAttribute('src', 'pies1.jpg');

    // Second image
    const secondImage = page.locator('#pies2');

    await expect(secondImage).toHaveAttribute('src', 'pies2.jpg');

    await secondImage.dispatchEvent('mouseover');
    await expect(secondImage).toHaveAttribute('src', 'pies2-odbicie.jpg');

    await secondImage.dispatchEvent('mouseout');
    await expect(secondImage).toHaveAttribute('src', 'pies2.jpg');

    // Third image
    const thirdImage = page.locator('#pies3');

    await expect(thirdImage).toHaveAttribute('src', 'pies3.jpg');

    await thirdImage.dispatchEvent('mouseover');
    await expect(thirdImage).toHaveAttribute('src', 'pies3-odbicie.jpg');

    await thirdImage.dispatchEvent('mouseout');
    await expect(thirdImage).toHaveAttribute('src', 'pies3.jpg');
  },
};

export default test;
