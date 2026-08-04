import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Dodawanie zadań',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#dodaj-pole').fill('Lekarz');
    await page.locator('#dodaj-przycisk').click();

    await expect(page.locator('#lista li').last()).toContainText('Lekarz');
  },
};

export default test;
