import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Niepoprawne dane',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#polak').fill('abc');
    await page.locator('#nowak').fill('6');
    await page.locator('#nowak').fill('2');
    await Promise.all([
      page.requireEvent('dialog', (dialog) => {
        expect(dialog).toHaveMessage('wpisz poprawne dane');
      }),
      page.locator('#wyznacz').click(),
    ]);
  },
};

export default test;
