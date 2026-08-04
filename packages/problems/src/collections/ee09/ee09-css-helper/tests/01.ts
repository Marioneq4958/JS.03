import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Składowa H = 200',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#h-skladnik').fill('200');
    await page.locator('#przycisk').click();

    await expect(page.locator('#k1')).toHaveCSS('background-color', 'hsl(200, 100%, 50%)');
    await expect(page.locator('#k2')).toHaveCSS('background-color', 'hsl(200, 80%, 50%)');
    await expect(page.locator('#k3')).toHaveCSS('background-color', 'hsl(200, 60%, 50%)');
    await expect(page.locator('#k4')).toHaveCSS('background-color', 'hsl(200, 40%, 50%)');
    await expect(page.locator('#k5')).toHaveCSS('background-color', 'hsl(200, 20%, 50%)');
  },
};

export default test;
