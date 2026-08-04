import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Choinka',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const choinkaImage = page.locator('#choinka');

    await choinkaImage.dispatchEvent('mouseover');
    await expect(page.locator('#wynik')).toHaveText('Wybrałeś choinkę. Cena 10 zł');

    await choinkaImage.dispatchEvent('mouseout');
    await expect(page.locator('#wynik')).toHaveText('');
  },
};

export default test;
