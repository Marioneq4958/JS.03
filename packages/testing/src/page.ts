import Dialog, { type DialogType } from './dialog';
import Locator from './locator';
import Logger from './logger';
import TestingError from './testing-error';

export default class Page {
  private dialogListeners: ((dialog: Dialog) => unknown)[] = [];

  constructor(
    private window: Window,
    private logger: Logger,
  ) {}

  private get document() {
    return this.window.document;
  }

  async injectCode(solution: string) {
    this.setupInterceptors();

    this.document.open();
    this.document.write(solution);
    this.document.close();

    if (this.document.readyState === 'loading')
      await new Promise<void>((resolve) => {
        this.document.addEventListener('DOMContentLoaded', () => resolve(), {
          once: true,
        });
      });
  }

  private setupInterceptors() {
    this.window.alert = (msg: string) => this.handleDialog('alert', msg);
    this.window.confirm = (msg: string) => !!this.handleDialog('confirm', msg);
    this.window.prompt = (msg: string, defaultValue: string) => {
      const res = this.handleDialog('prompt', msg, defaultValue);
      return res ? res.toString() : null;
    };
  }

  /*
    Because of alert, prompt and confirm can't be async, this has been made in weird way.
  */
  private handleDialog(type: DialogType, message: string, defaultValue?: string) {
    let response: unknown = null;
    const dialog = new Dialog(
      this.logger,
      type,
      message,
      (res) => {
        if (res) response = res;
      },
      defaultValue,
    );
    this.dialogListeners.forEach((listener) => {
      listener(dialog);
    });

    return response;
  }

  locator(selector: string) {
    return new Locator(
      async () => this.document.querySelectorAll(selector),
      selector,
      new TestingError(`Nie znaleziono elementu ${selector}. Upewnij się, że nie usunęłeś/aś go`),
      (msg: string) => {
        this.logger.add('Test', msg);
      },
    );
  }

  title() {
    return this.document.title;
  }

  on(_event: 'dialog', listener: (dialog: Dialog) => unknown) {
    this.dialogListeners.push(listener);
  }

  off(_event: 'dialog', listener: (dialog: Dialog) => unknown) {
    this.dialogListeners = this.dialogListeners.filter((l) => l !== listener);
  }

  requireEvent(_event: 'dialog', callback: (dialog: Dialog) => void) {
    return new Promise<void>((resolve, reject) => {
      const listener = (dialog: Dialog) => {
        clearTimeout(timeoutId);
        this.off('dialog', listener);
        callback(dialog);
        resolve();
      };

      const timeoutId = setTimeout(() => {
        this.off('dialog', listener);
        reject(new TestingError('Okno dialogowe nie pojawiło się, mimo że powinno.'));
      }, 2000);

      this.dialogListeners.push(listener);
    });
  }
}
