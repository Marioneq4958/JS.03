import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Trzecia sekcja i okno dialogowe',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#nastepna1').click();
    await page.locator('#nastepna2').click();

    await page.locator('#haslo').fill('haslo123');
    await page.locator('#powtorzHaslo').fill('inneHaslo');

    await Promise.all([
      page.requireEvent('dialog', (dialog) => {
        expect(dialog).toHaveType('alert');
        expect(dialog).toHaveMessage('Podane hasła różnią się');
      }),
      page.locator('#zatwierdz').click(),
    ]);
  },
};

export default test;
