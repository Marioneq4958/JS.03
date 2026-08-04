import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zwykłe dane',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#imie').fill('Jan');
    await page.locator('#nazwisko').fill('Kowalski');
    await page.locator('#email').fill('jan@adres.com');
    await page.locator('#usluga').fill('odzyskiwanie danych');
    await page.locator('#przycisk').click();

    const output = page.locator('#wynik');
    await expect(output).toHaveHTML('Jan Kowalski<br>jan@adres.com<br>Usługa: odzyskiwanie danych');
  },
};

export default test;
