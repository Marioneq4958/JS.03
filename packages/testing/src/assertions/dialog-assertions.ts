import Dialog, { type DialogType } from '../dialog';
import TestingError from '../testing-error';

export default class DialogAssertions {
  constructor(private dialog: Dialog) {}

  toHaveMessage(expected: string) {
    const actual = this.dialog.message();
    if (actual !== expected)
      throw new TestingError(`Okno ${this.dialog.type()} ma wiadomość "${actual}", oczekiwano "${expected}".`);
  }

  toHaveType(expected: DialogType) {
    const actual = this.dialog.type();
    if (actual !== expected) throw new TestingError(`Okno jest typu ${actual}, oczekiwano ${expected}.`);
  }

  toHaveDefaultValue(expected?: string) {
    const actual = this.dialog.defaultValue();

    if (expected === actual) return;
    if (expected === undefined)
      throw new TestingError(
        `Okno ${this.dialog.type()} ma wartość domyślną "${actual}", oczekiwano braku domyślnej wartości.`,
      );
    if (actual === undefined)
      throw new TestingError(`Okno ${this.dialog.type()} nie ma wartości domyślnej, oczekiwano "${expected}".`);
    throw new TestingError(`Okno ${this.dialog.type()} ma wartość domyślną "${actual}", oczekiwano "${expected}".`);
  }
}
