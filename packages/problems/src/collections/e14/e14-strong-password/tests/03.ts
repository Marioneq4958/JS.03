import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Średnie hasło',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#haslo').fill('qwe1');
    await page.locator('#przycisk').click();
    await expect(page.locator('#wynik')).toHaveText('HASŁO JEST ŚREDNIE');
    await expect(page.locator('#wynik')).toHaveCSS('color', 'blue');
  },
};

export default test;
