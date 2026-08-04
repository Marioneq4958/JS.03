import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Aktualizacja ilości',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await Promise.all([
      page.requireEvent('dialog', (dialog) => {
        expect(dialog).toHaveType('prompt');
        expect(dialog).toHaveMessage('Podaj nową ilość:');
        dialog.accept('0');
      }),
      page.locator('#aktualizuj1').click(),
    ]);

    await expect(page.locator('#dostepna1')).toHaveText('0');
  },
};

export default test;
