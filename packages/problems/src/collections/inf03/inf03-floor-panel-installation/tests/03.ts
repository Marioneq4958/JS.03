import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Koszt montażu',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const button = page.locator('#przycisk');
    const output = page.locator('#wynik');
    await page.locator('#szerokosc').fill('2');
    await page.locator('#dlugosc').fill('5');

    await page.locator('#laminowane').check();
    await button.click();
    await expect(output).toHaveText('Pole powierzchni pomieszczenia: 10, koszt montażu 120');

    await page.locator('#winylowe').check();
    await button.click();
    await expect(output).toHaveText('Pole powierzchni pomieszczenia: 10, koszt montażu 140');

    await page.locator('#deska').check();
    await button.click();
    await expect(output).toHaveText('Pole powierzchni pomieszczenia: 10, koszt montażu 180');
  },
};

export default test;
