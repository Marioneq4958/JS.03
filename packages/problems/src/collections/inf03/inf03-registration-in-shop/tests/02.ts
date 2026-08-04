import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Pasek postępu',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const progressValueEl = page.locator('#pasek-postepu-blok');

    await page.locator('#imie').dispatchEvent('blur');
    await page.locator('#imie').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '16%');

    await page.locator('#nazwisko').dispatchEvent('blur');
    await page.locator('#nazwisko').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '28%');

    await page.locator('#data-ur').dispatchEvent('blur');
    await page.locator('#data-ur').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '40%');

    await page.locator('#ulica').dispatchEvent('blur');
    await page.locator('#ulica').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '52%');

    await page.locator('#numer').dispatchEvent('blur');
    await page.locator('#numer').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '64%');

    await page.locator('#miasto').dispatchEvent('blur');
    await page.locator('#miasto').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '76%');

    await page.locator('#numer-kom').dispatchEvent('blur');
    await page.locator('#numer-kom').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '88%');

    await page.locator('#rodo').dispatchEvent('blur');
    await page.locator('#rodo').dispatchEvent('focusout');
    await expect(progressValueEl).toHaveCSS('width', '100%');
  },
};

export default test;
