import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Z poprawinami',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba-gosci').fill('30');
    await page.locator('#poprawiny').click();
    await page.locator('#oblicz').click();

    await expect(page.locator('#wynik')).toHaveText('Koszt Twojego wesela to 3900 złotych');
  },
};

export default test;
