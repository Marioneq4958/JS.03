import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Papier błyszczący',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#wybierz-obraz').setInputFiles([{ name: '1.jpg', mimeType: 'image/jpeg', fileBits: [] }]);
    await page.locator('#liczba-kopii').fill('10');
    await page.locator('#papier-blyszczacy').check();
    await page.locator('#przycisk').click();

    await expect(page.locator('#koszyk img')).toHaveAttribute('src', '1.jpg');
    await expect(page.locator('#koszyk p').nth(0)).toHaveText('Liczba kopii: 10');
    await expect(page.locator('#koszyk p').nth(1)).toHaveText('Cena: 15');
  },
};

export default test;
