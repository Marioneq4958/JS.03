import Locator from '../locator';
import TestingError from '../testing-error';

export default class LocatorAssertions {
  constructor(private locator: Locator) {}

  async toHaveValue(expected: string) {
    const actual = await this.locator.inputValue();
    if (actual !== expected)
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" ma wartość "${actual}", oczekiwano "${expected}".`,
      );
  }

  async toHaveText(expected: string) {
    const actual = await this.locator.textContent();
    if (actual !== expected)
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" ma treść "${actual}", oczekiwano "${expected}".`,
      );
  }

  async toHaveHTML(expected: string) {
    const actual = await this.locator.innerHTML();
    if (actual !== expected)
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" ma zawartość HTML "${actual}", oczekiwano "${expected}".`,
      );
  }

  async toBeVisible() {
    if (!(await this.locator.isVisible()))
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" jest niewidoczny, mimo że powinien być widoczny.`,
      );
  }

  async toBeNonVisible() {
    if (await this.locator.isVisible())
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" jest widoczny, mimo że powinien być niewidoczny.`,
      );
  }

  async toHaveAttribute(name: string, expectedValue: string) {
    const actualValue = await this.locator.getAttribute(name);

    if (actualValue === null)
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" nie ma atrybutu ${name}, mimo że powinien mieć.`,
      );
    if (actualValue !== expectedValue)
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" ma atrybut ${name} o wartości "${actualValue}", oczekiwano wartości "${expectedValue}".`,
      );
  }

  private toKebabCase = (str: string) => str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

  private getElementStyle(element: HTMLElement, propertyName: string) {
    const document = element.ownerDocument;
    const window = document.defaultView!;
    const kebabProperty = this.toKebabCase(propertyName);

    const computed = window.getComputedStyle(element).getPropertyValue(kebabProperty);
    const inline = element.style.getPropertyValue(kebabProperty);
    const declared = 'computedStyleMap' in element ? element.computedStyleMap().get(kebabProperty) : undefined;

    return { normalized: computed, denormalized: (declared?.toString() ?? inline) || null };
  }

  private normalizeCSSValue(propertyName: string, value: string) {
    const kebabProperty = this.toKebabCase(propertyName);

    const dummy = document.createElement('div');
    dummy.style.setProperty(kebabProperty, value);

    document.body.appendChild(dummy);
    const normalized = window.getComputedStyle(dummy).getPropertyValue(kebabProperty);
    dummy.remove();

    return normalized;
  }

  async toHaveCSS(propertyName: string, expectedDenormalized: string) {
    const element = await this.locator.element();

    const actual = this.getElementStyle(element, propertyName);
    const expected = {
      normalized: this.normalizeCSSValue(propertyName, expectedDenormalized),
      denormalized: expectedDenormalized,
    };

    if (actual.normalized !== expected.normalized) {
      const expectedText = expected.denormalized || 'nie ustawione';
      const actualText = actual.denormalized || 'nie ustawione';
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" ma niepoprawny styl "${propertyName}":
        Oczekiwano: ${expectedText}
        Otrzymano: ${actualText}
        `,
      );
    }
  }

  async toHaveClass(name: string) {
    const classes = await this.locator.classes();
    if (!classes.contains(name))
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" nie ma klasy "${name}", mimo że oczekiwano tego.`,
      );
  }

  async toContainText(expected: string) {
    const text = await this.locator.textContent();
    if (!text.includes(expected))
      throw new TestingError(
        `Element o selektorze "${this.locator.getSelector()}" ma treść "${text}", która nie zawiera fragmentu "${expected}".`,
      );
  }

  async toHaveCount(expected: number) {
    const actual = await this.locator.count();
    if (expected !== actual)
      throw new TestingError(
        `Znaleziono ${actual} elementów o selektorze "${this.locator.getSelector()}", oczekiwano ${expected}.`,
      );
  }
}
