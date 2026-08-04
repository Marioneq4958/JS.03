import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zestaw 1',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#indigo').click();

    const colorInput = page.locator('#kolor-czcionki');
    await colorInput.fill('tan');
    await colorInput.click();

    const sizeInput = page.locator('#rozmiar-czcionki');
    await sizeInput.fill('150%');
    await sizeInput.dispatchEvent('focusout');
    await sizeInput.dispatchEvent('blur');

    await page.locator('label[for="ramka"]').click();
    await page.locator('#punktor-kwadrat').click();

    await expect(page.locator('#blok-prawy')).toHaveCSS('background-color', 'rgb(75, 0, 130)');
    await expect(page.locator('#blok-prawy')).toHaveCSS('color', 'rgb(210, 180, 140)');
    await expect(page.locator('#blok-prawy')).toHaveCSS('font-size', '24px');
    await expect(page.locator('#prawy-obraz')).toHaveCSS('border-top-style', 'none');
    await expect(page.locator('#prawy-lista')).toHaveCSS('list-style-type', 'square');
  },
};

export default test;
