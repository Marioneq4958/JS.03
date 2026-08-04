import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Bez poprawin',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba-gosci').fill('75');
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Koszt Twojego wesela to 7500 złotych');
  },
};

export default test;
