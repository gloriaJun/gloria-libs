import { isEmptyString } from './isEmptyString';

describe('isEmptyString', () => {
  describe('should be return true if input is empty string', () => {
    it(`isEmptyString('')`, () => {
      expect(isEmptyString('')).toBe(true);
    });

    it(`isEmptyString('  ')`, () => {
      expect(isEmptyString('  ')).toBe(true);
    });
  });

  describe('should be return false if input is not empty', () => {
    it(`isEmptyString(' test ')`, () => {
      expect(isEmptyString(' test ')).toBe(false);
    });
  });
});
