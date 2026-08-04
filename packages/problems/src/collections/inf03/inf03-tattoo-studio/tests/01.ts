import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zielony, Angel, 70 zł',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#wzor').setInputFiles([{ name: 'angel.png', mimeType: 'image/png', fileBits: [] }]);
    await page.locator('#kolor').fill('Zielony');
    await page.locator('#cena').fill('70');

    await Promise.all([
      page.requireEvent('dialog', (dialog) => {
        expect(dialog).toHaveMessage('Wzór: angel.png, kolor Zielony w cenie 70 zł');
        dialog.accept();
      }),
      page.locator('#dodaj-wzor').click(),
    ]);
    await expect(page.locator('#galeria img').nth(2)).toHaveAttribute('src', 'angel.png');
  },
};

export default test;
