import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'E-mail z wielkimi literami',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#imie').fill('Marianna');
    await page.locator('#nazwisko').fill('Przykładowa');
    await page.locator('#email').fill('MarIanna@AdreS.CoM');
    await page.locator('#usluga').fill('inne');
    await page.locator('#przycisk').click();

    const output = page.locator('#wynik');
    await expect(output).toHaveHTML('Marianna Przykładowa<br>marianna@adres.com<br>Usługa: inne');
  },
};

export default test;
