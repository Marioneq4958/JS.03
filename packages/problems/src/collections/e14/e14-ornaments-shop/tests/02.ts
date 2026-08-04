import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Mikołaj',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const mikolajImage = page.locator('#mikolaj');

    await mikolajImage.dispatchEvent('mouseover');
    await expect(page.locator('#wynik')).toHaveText('Wybrałeś mikołaja. Cena 12 zł');

    await mikolajImage.dispatchEvent('mouseout');
    await expect(page.locator('#wynik')).toHaveText('');
  },
};

export default test;
