import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Renifer',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const reniferImage = page.locator('#renifer');

    await reniferImage.dispatchEvent('mouseover');
    await expect(page.locator('#wynik')).toHaveText('Wybrałeś renifera. Cena 8 zł');

    await reniferImage.dispatchEvent('mouseout');
    await expect(page.locator('#wynik')).toHaveText('');
  },
};

export default test;
