import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Rozmiar czcionki',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const paragraph = page.locator('#paragraf');
    const fontSizeInput = page.locator('#rozmiar-tekstu');
    const redBtn = page.locator('#czerwony');

    await fontSizeInput.fill('20');
    await redBtn.click();
    await expect(paragraph).toHaveCSS('font-size', '20%');

    await fontSizeInput.fill('50');
    await redBtn.click();
    await expect(paragraph).toHaveCSS('font-size', '50%');
  },
};

export default test;
