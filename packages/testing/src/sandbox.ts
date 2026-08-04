import Logger from './logger';
import Page from './page';

export default class Sandbox {
  private page?: Page;
  constructor(
    private iframe: HTMLIFrameElement,
    private logger: Logger,
  ) {}

  static createHiddenIframe() {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    iframe.style.opacity = '0';
    iframe.style.pointerEvents = 'none';

    return iframe;
  }

  async mount() {
    const promise = new Promise<void>((resolve) => {
      this.iframe.addEventListener('load', () => resolve(), { once: true });
    });
    document.body.appendChild(this.iframe);
    await promise;

    this.page = new Page(this.getWindow(), this.logger);
  }

  async unmount() {
    this.iframe.remove();
    this.page = undefined;
  }

  private getWindow() {
    const window = this.iframe.contentWindow;
    if (!window) throw new Error("The iframe hasn't been mounted.");
    return window;
  }

  getPage() {
    if (!this.page) throw new Error("The page object hasn't been created.");
    return this.page;
  }
}
