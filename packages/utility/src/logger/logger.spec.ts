import { Logger } from './logger';

describe('Logger', () => {
  it(`should be set log level info, if not set level`, () => {
    const logger = new Logger();
    expect(logger.getCurrentLogLevel()).toBe('info');
  });

  it(`should be set log level info, if set level`, () => {
    const level = 'debug';
    const logger = new Logger(level);
    expect(logger.getCurrentLogLevel()).toBe(level);
  });

  describe('should be print message property', () => {
    const logger = new Logger('info');
    const log = logger.info;

    beforeEach(() => {
      jest.spyOn(global.console, 'info');
    });

    it(`simple string message`, () => {
      const msg = 'logging message';
      expect(log(msg)).not.toBe(msg);
    });
  });

  describe('should be call by the log level', () => {
    const msg = 'message';

    beforeEach(() => {
      jest.spyOn(global.console, 'trace');
      jest.spyOn(global.console, 'debug');
      jest.spyOn(global.console, 'info');
      jest.spyOn(global.console, 'warn');
      jest.spyOn(global.console, 'error');
    });

    it(`[trace] should be call the trace logging`, () => {
      const logger = new Logger('trace');
      logger.trace(msg);
      expect(console.trace).toBeCalled();
    });

    describe('should be call by the log level', () => {
      const level = 'debug';

      it(`[debug] should be not call the trace logging`, () => {
        const logger = new Logger(level);
        logger.trace(msg);
        expect(console.trace).not.toBeCalled();
      });

      it(`[debug] should be call the debug logging`, () => {
        const logger = new Logger(level);
        logger.debug(msg);
        expect(console.debug).toBeCalled();
      });
    });

    // describe('[info] should be print until info level', () => {
    //   const logger = new Logger('info');
    //   const msg = 'info level';

    //   it(`debug level - not display`, () => {
    //     logger.debug(msg);
    //     expect(console.log).not.toBeCalled();
    //   });

    //   it(`info level`, () => {
    //     logger.info(msg);
    //     expect(console.log).toBeCalled();
    //   });
    // });
  });
});
