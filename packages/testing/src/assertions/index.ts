import Dialog from '../dialog';
import Locator from '../locator';
import DialogAssertions from './dialog-assertions';
import LocatorAssertions from './locator-assertions';

export function expect(arg: Locator): LocatorAssertions;
export function expect(arg: Dialog): DialogAssertions;
export function expect(arg: Locator | Dialog) {
  if (arg instanceof Locator) return new LocatorAssertions(arg);
  return new DialogAssertions(arg);
}
