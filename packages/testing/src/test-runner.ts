import Logger from './logger';
import type { ProblemTest } from './problem-test';
import Sandbox from './sandbox';
import TestingError from './testing-error';

export default class TestRunner {
  static async run(solution: string, test: ProblemTest) {
    const logger = new Logger();
    const sandbox = new Sandbox(Sandbox.createHiddenIframe(), logger);
    await sandbox.mount();
    const page = sandbox.getPage();

    let error: TestingError | null = null;

    try {
      await test.run({ page, loadSolution: () => page.injectCode(solution) });
    } catch (reason) {
      if (reason instanceof TestingError) {
        error = reason;
      } else if (reason instanceof Error) {
        error = new TestingError(reason.message);
      } else {
        error = new TestingError('Wystąpił nieoczekiwany błąd podczas testowania.');
      }
    } finally {
      await sandbox.unmount();
    }

    return { error, logs: logger.getLogs() };
  }
}
