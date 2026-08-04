import Logger from './logger';

export type DialogType = 'alert' | 'prompt' | 'confirm';

export default class Dialog {
  constructor(
    private logger: Logger,
    private type_: DialogType,
    private message_: string,
    private sendResponse: (res?: unknown) => void,
    private defaultValue_?: string,
  ) {}

  accept(res?: string) {
    if (this.type_ === 'confirm') {
      this.sendResponse(true);
      this.logger.add('Testy', 'Zaakceptowano okno dialogowe.');
      return;
    }

    this.logger.add(
      'Testy',
      res ? `Przesłano odpowiedź "${res}" do okna dialogowego.` : 'Przesłano pustą odpowiedź do okna dialogowego',
    );
    this.sendResponse(res);
  }

  dismiss() {
    this.logger.add('Testy', 'Odrzucono okno dialogowe.');
    if (this.type_ === 'prompt') this.sendResponse(false);
    else this.sendResponse();
  }

  type() {
    return this.type_;
  }

  message() {
    return this.message_;
  }

  defaultValue() {
    return this.defaultValue_;
  }
}
