import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dzielenie bez reszty (powierzchnia 8)',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#powierzchnia').fill('8');
    await page.locator('#przycisk').click();

    await expect(page.locator('#wynik')).toHaveText(
      'Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: 2',
    );
  },
};

export default test;
