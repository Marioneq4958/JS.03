import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Liczba 255',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#liczba').fill('255');
    await page.locator('#przelicz').click();
    await expect(page.locator('#wynik')).toHaveHTML('1111 1111<sub>(2)</sub>');
  },
};

export default test;
