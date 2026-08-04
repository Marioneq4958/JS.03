import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Papier matowy',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#wybierz-obraz').setInputFiles([{ name: '4.jpg', mimeType: 'image/jpeg', fileBits: [] }]);
    await page.locator('#liczba-kopii').fill('20');
    await page.locator('#papier-matowy').check();
    await page.locator('#przycisk').click();

    await expect(page.locator('#koszyk img')).toHaveAttribute('src', '4.jpg');
    await expect(page.locator('#koszyk p').nth(0)).toHaveText('Liczba kopii: 20');
    await expect(page.locator('#koszyk p').nth(1)).toHaveText('Cena: 40');
  },
};

export default test;
