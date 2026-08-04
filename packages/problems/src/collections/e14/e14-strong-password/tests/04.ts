import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dobre hasło',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#haslo').fill('qwerty1');
    await page.locator('#przycisk').click();
    await expect(page.locator('#wynik')).toHaveText('HASŁO JEST DOBRE');
    await expect(page.locator('#wynik')).toHaveCSS('color', 'green');
  },
};

export default test;
