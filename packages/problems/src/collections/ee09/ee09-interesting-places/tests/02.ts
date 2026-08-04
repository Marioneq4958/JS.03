import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zmiana obrazu',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const mainImage = page.locator('#glowny-obraz');

    await page.locator('#obraz2').click();
    await expect(mainImage).toHaveAttribute('src', 'pekin.jpg');

    await page.locator('#obraz3').click();
    await expect(mainImage).toHaveAttribute('src', 'serengeti.jpg');

    await page.locator('#obraz4').click();
    await expect(mainImage).toHaveAttribute('src', 'wenecja.jpg');

    await page.locator('#obraz5').click();
    await expect(mainImage).toHaveAttribute('src', 'tajlandia.jpg');

    await page.locator('#obraz1').click();
    await expect(mainImage).toHaveAttribute('src', 'lanzarotte.jpg');
  },
};

export default test;
