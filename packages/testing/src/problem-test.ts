import type Page from './page';

export interface ProblemTest {
  name: string;
  run: ({ page }: { page: Page; loadSolution: () => Promise<void> }) => Promise<void>;
}
