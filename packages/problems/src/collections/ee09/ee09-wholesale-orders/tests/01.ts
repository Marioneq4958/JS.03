import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Zaznacznie braków',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await expect(page.locator('#dostepna0')).toHaveCSS('background-color', 'honeydew');
    await expect(page.locator('#dostepna1')).toHaveCSS('background-color', 'yellow');
    await expect(page.locator('#dostepna2')).toHaveCSS('background-color', 'honeydew');
    await expect(page.locator('#dostepna3')).toHaveCSS('background-color', 'honeydew');
  },
};

export default test;
