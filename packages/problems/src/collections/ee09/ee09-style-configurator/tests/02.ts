import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 2',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#olive').click();

    const colorInput = page.locator('#kolor-czcionki');
    await colorInput.fill('plum');
    await colorInput.click();

    const sizeInput = page.locator('#rozmiar-czcionki');
    await sizeInput.fill('200%');
    await sizeInput.dispatchEvent('focusout');
    await sizeInput.dispatchEvent('blur');

    await page.locator('#punktor-okrag').click();

    await expect(page.locator('#blok-prawy')).toHaveCSS('background-color', 'rgb(128, 128, 0)');
    await expect(page.locator('#blok-prawy')).toHaveCSS('color', 'rgb(221, 160, 221)');
    await expect(page.locator('#blok-prawy')).toHaveCSS('font-size', '32px');
    await expect(page.locator('#prawy-obraz')).toHaveCSS('border-top-width', '1px');
    await expect(page.locator('#prawy-lista')).toHaveCSS('list-style-type', 'circle');
  },
};

export default test;
