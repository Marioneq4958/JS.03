export interface Log {
  date: Date;
  channel: string;
  message: string;
}

export default class Logger {
  private logs: Log[] = [];

  getLogs() {
    return this.logs;
  }

  add(channel: string, message: string) {
    this.logs.push({ date: new Date(), channel, message });
  }
}
