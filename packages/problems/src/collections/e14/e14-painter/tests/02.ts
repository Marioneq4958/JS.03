import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dzielenie z zaokrągleniem w dół (powierzchnia 9)',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#powierzchnia').fill('9');
    await page.locator('#przycisk').click();

    await expect(page.locator('#wynik')).toHaveText(
      'Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: 3',
    );
  },
};

export default test;
