import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Więcej niż 40 ogłoszeń, zwykły klient',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba').fill('50');
    await page.locator('#kalkulacja').click();
    await expect(page.locator('#wynik')).toHaveText('Twoje ogłoszenia będą kosztować: 100 PLN');
  },
};

export default test;
