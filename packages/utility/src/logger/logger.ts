const levels = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10,
} as const;
type ILevelKeys = keyof typeof levels;
type ILevelValues = typeof levels[ILevelKeys];

export class Logger {
  private readonly defaultLevel = levels.info;
  private currentLogLevel: ILevelValues;

  constructor(key: ILevelKeys) {
    this.currentLogLevel = levels[key] || this.defaultLevel;
  }

  getCurrentLogLevel() {
    return this.currentLogLevel;
  }
}
