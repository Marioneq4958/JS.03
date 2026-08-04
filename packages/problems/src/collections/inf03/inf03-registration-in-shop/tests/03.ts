import { type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Wypisywanie informacji do konsoli',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#imie').fill('Adrian');
    await page.locator('#nazwisko').fill('Przykładowy');
    await page.locator('#data-ur').fill('2000-03-20');

    await page.locator('#ulica').fill('Miła');
    await page.locator('#numer').fill('3');
    await page.locator('#miasto').fill('Warszawa');

    await page.locator('#numer-kom').fill('000000000');
    await page.locator('#rodo').check();

    await page.locator('#zatwierdz').click();
  },
};

export default test;
