import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Puste hasło',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#przycisk').click();
    await expect(page.locator('#wynik')).toHaveText('HASŁO JEST PUSTE');
    await expect(page.locator('#wynik')).toHaveCSS('color', 'red');
  },
};

export default test;
