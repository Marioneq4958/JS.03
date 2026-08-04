import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dowóz do Zielonej Góry',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#zielona-gora').click();
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Dowieziemy Twoją pizzę za darmo');
  },
};

export default test;
