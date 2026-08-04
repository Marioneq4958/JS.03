import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Mniej niż 41 ogłoszeń, stały klient',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba').fill('30');
    await page.locator('#staly-klient').check();
    await page.locator('#kalkulacja').click();
    await expect(page.locator('#wynik')).toHaveText('Twoje ogłoszenia będą kosztować: 81 PLN');
  },
};

export default test;
