import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Pole powierzchni',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#szerokosc').fill('7');
    await page.locator('#dlugosc').fill('11');
    await page.locator('#laminowane').check();

    await page.locator('#przycisk').click();
    await expect(page.locator('#wynik')).toContainText('Pole powierzchni pomieszczenia: 77');
  },
};

export default test;
