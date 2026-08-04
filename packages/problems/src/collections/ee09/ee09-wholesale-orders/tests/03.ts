import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zamawianie',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await Promise.all([
      page.requireEvent('dialog', (dialog) => {
        expect(dialog).toHaveType('alert');
        expect(dialog).toHaveMessage('Zamówienie nr: 1 Produkt: Skrętka U/UTP drut');
      }),
      page.locator('#zamow0').click(),
    ]);
  },
};

export default test;
