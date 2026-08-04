import TestingError from './testing-error';

export default class Locator {
  constructor(
    private query: () => Promise<NodeListOf<HTMLElement> | HTMLElement>,
    private selector: string,
    private notFoundError: Error,
    private log: (msg: string) => void,
  ) {}

  private async allElements() {
    const startTime = Date.now();
    while (Date.now() - startTime < 700) {
      const elementList = await this.query();
      if (elementList && 'length' in elementList ? elementList.length : elementList) {
        return elementList;
      }
      await new Promise((r) => setTimeout(r, 50));
    }
    throw this.notFoundError;
  }

  async element() {
    const all = await this.allElements();
    if (!all) throw new Error('unexpected');
    const el = 'length' in all ? all[0] : all;
    if (!el) throw this.notFoundError;
    return el;
  }

  nth(index: number) {
    return new Locator(
      async () => {
        const all = await this.allElements();
        const el = 'length' in all ? all[index] : all;
        if (!el) throw new Error(`Nie znaleziono elementu o indeksie ${index} dla selektora ${this.selector}`);
        return el;
      },
      `${this.selector}:nth-child(${index})`,
      new Error('Wystąpił nieoczekiwany błąd'),
      this.log,
    );
  }

  first() {
    return this.nth(0);
  }

  last() {
    return new Locator(
      async () => {
        const all = await this.allElements();
        const el = 'length' in all ? all[all.length - 1] : all;
        if (!el) throw new Error(`Nie znaleziono ostatniego elementu dla selektora ${this.selector}`);
        return el;
      },
      `${this.selector}:last`,
      new Error('Wystąpił nieoczekiwany błąd'),
      this.log,
    );
  }

  locator(selector: string) {
    return new Locator(
      async () => (await this.element()).querySelectorAll(selector),
      `${this.selector} ${selector}`,
      new TestingError(
        `Nie znaleziono elementu ${selector} w elemencie ${this.selector}. Upewnij się, że nie usunęłeś/aś go`,
      ),
      this.log,
    );
  }

  getSelector() {
    return this.selector;
  }

  async count() {
    const all = await this.allElements();
    return 'length' in all ? all.length : 1;
  }

  async click() {
    const element = await this.element();
    element.click();

    this.log(`Kliknięto element "${this.selector}".`);
  }

  async fill(text: string) {
    const element = await this.element();
    if (!('value' in element)) throw new TestingError(`Element "${this.selector}" nie może mieć wartości.`);

    element.value = text;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));

    this.log(`Ustawiono wpisano elementowi "${this.selector}" wartość "${text}".`);
  }

  async clear() {
    const element = await this.element();
    if (!('value' in element)) throw new TestingError(`Element "${this.selector}" nie może mieć wartości.`);

    element.value = '';
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));

    this.log(`Wyczyszczono wartość elementowi "${this.selector}".`);
  }

  async check() {
    const element = await this.element();
    if (!('checked' in element)) throw new TestingError(`Element "${this.selector}" nie może być zaznaczony.`);

    element.checked = true;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));

    this.log(`Zaznaczono element "${this.selector}".`);
  }

  async uncheck() {
    const element = await this.element();
    if (!('checked' in element)) throw new TestingError(`Element "${this.selector}" nie może być odznaczony.`);

    element.checked = false;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));

    this.log(`Odznaczono element "${this.selector}".`);
  }

  async dispatchEvent(type: string) {
    const element = await this.element();
    element.dispatchEvent(new Event(type, { bubbles: true }));

    const message = (() => {
      switch (type) {
        case 'mouseover':
          return `Najechano kursorem na element "${this.selector}".`;
        case 'mouseout':
          return `Opuszczono przez kursor element "${this.selector}".`;
        default:
          return `Wywołano wydarzenie "${type}" dla elementu "${this.selector}";`;
      }
    })();
    this.log(message);
  }

  async setInputFiles(files: { name: string; mimeType: string; fileBits: BlobPart[] }[]) {
    const dataTransfer = new DataTransfer();
    files.forEach((f) => {
      dataTransfer.items.add(new File(f.fileBits, f.name, { type: f.mimeType }));
    });

    const element = (await this.element()) as HTMLInputElement;
    element.files = dataTransfer.files;
  }

  async inputValue() {
    const element = await this.element();
    if (!('value' in element)) throw new TestingError(`Element "${this.selector}" nie może mieć wartości.`);

    return element.value;
  }

  async getAttribute(name: string) {
    const element = await this.element();
    return element.getAttribute(name);
  }

  async innerHTML() {
    const element = await this.element();
    return element.innerHTML;
  }

  async id() {
    const element = await this.element();
    return element.id;
  }

  async isVisible() {
    const element = await this.element();
    const style = element.ownerDocument.defaultView!.getComputedStyle(element);
    return style.display !== 'none' && style.visibility !== 'hidden';
  }

  async textContent() {
    const element = await this.element();
    return element.textContent;
  }

  async classes() {
    const element = await this.element();
    return element.classList;
  }
}
