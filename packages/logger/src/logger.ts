import { ObjectUtility } from '@glibs/utility';

const LOG_LEVEL = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
} as const;
type ILevelKeys = keyof typeof LOG_LEVEL;
type ILevelValues = typeof LOG_LEVEL[ILevelKeys];

type ILogArgs = unknown[];

export class Logger {
  private readonly defaultLevel = LOG_LEVEL.info;
  private currentLogLevel: ILevelValues;

  constructor(level?: ILevelKeys) {
    this.currentLogLevel =
      level && ObjectUtility.hasKey(LOG_LEVEL, level)
        ? LOG_LEVEL[level]
        : this.defaultLevel;
  }

  private log = (level: ILevelValues, ...args: ILogArgs): void => {
    if (this.currentLogLevel <= level) {
      console.log('### will be logging', this.currentLogLevel, level);
      const key = <ILevelKeys>ObjectUtility.findKey(LOG_LEVEL, level);
      console[key](...args);
    }
  };

  getCurrentLogLevel = () => {
    return ObjectUtility.findKey(LOG_LEVEL, this.currentLogLevel);
  };

  trace = (...args: ILogArgs) => {
    this.log(LOG_LEVEL.trace, ...args);
  };

  debug = (...args: ILogArgs) => {
    this.log(LOG_LEVEL.debug, ...args);
  };

  info = (...args: ILogArgs) => {
    this.log(LOG_LEVEL.info, ...args);
  };

  warn = (...args: ILogArgs) => {
    this.log(LOG_LEVEL.warn, ...args);
  };

  error = (...args: ILogArgs) => {
    this.log(LOG_LEVEL.error, ...args);
  };
}
