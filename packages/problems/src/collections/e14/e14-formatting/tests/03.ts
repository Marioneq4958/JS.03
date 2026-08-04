import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Styl czcionki (normalny/pochylony)',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const paragraph = page.locator('#paragraf');
    const fontStyleSelect = page.locator('#styl-czcionki');
    const redBtn = page.locator('#czerwony');

    await fontStyleSelect.fill('kursywa');
    await redBtn.click();
    await expect(paragraph).toHaveCSS('font-style', 'italic');

    await fontStyleSelect.fill('prosty');
    await redBtn.click();
    await expect(paragraph).toHaveCSS('font-style', 'normal');
  },
};

export default test;
