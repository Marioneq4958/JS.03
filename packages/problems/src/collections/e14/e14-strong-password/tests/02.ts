import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Słabe hasło',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const password = page.locator('#haslo');
    const button = page.locator('#przycisk');
    const output = page.locator('#wynik');

    await password.fill('qwertyuiop');
    await button.click();
    await expect(output).toHaveText('HASŁO JEST SŁABE');
    await expect(output).toHaveCSS('color', 'yellow');

    await password.fill('qw1');
    await button.click();
    await expect(output).toHaveText('HASŁO JEST SŁABE');
    await expect(output).toHaveCSS('color', 'yellow');
  },
};

export default test;
