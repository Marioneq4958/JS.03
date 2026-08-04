import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Brak lub niepełne dane',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const button = page.locator('#przycisk');
    const width = page.locator('#szerokosc');
    const height = page.locator('#dlugosc');
    const output = page.locator('#wynik');

    await button.click();
    await expect(output).toHaveText('Wprowadź poprawne dane.');

    await width.fill('10');
    await button.click();
    await expect(output).toHaveText('Wprowadź poprawne dane.');

    await width.clear();
    await height.fill('20');
    await button.click();
    await expect(output).toHaveText('Wprowadź poprawne dane.');
  },
};

export default test;
