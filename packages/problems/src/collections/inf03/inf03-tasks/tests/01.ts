import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Oznaczanie zadań jako wykonane',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    for (let i = 0; i < 6; i++) {
      const taskElement = page.locator('#lista li').nth(i);
      await taskElement.locator('button').click();
      await expect(taskElement).toHaveCSS('text-decoration-line', 'line-through');
    }
  },
};

export default test;
