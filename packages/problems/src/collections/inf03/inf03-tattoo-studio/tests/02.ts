import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Czerwony, Rozeta, 80 zł',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#wzor').setInputFiles([{ name: 'rozeta.png', mimeType: 'image/png', fileBits: [] }]);
    await page.locator('#kolor').fill('Czerwony');
    await page.locator('#cena').fill('80');

    await Promise.all([
      page.requireEvent('dialog', (dialog) => {
        expect(dialog).toHaveMessage('Wzór: rozeta.png, kolor Czerwony w cenie 80 zł');
        dialog.accept();
      }),
      page.locator('#dodaj-wzor').click(),
    ]);
    await expect(page.locator('#galeria img').nth(2)).toHaveAttribute('src', 'rozeta.png');
  },
};

export default test;
