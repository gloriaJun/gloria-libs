import { toNumber } from './toNumber';

describe('toNumber', () => {
  describe('should be return number value if input is number', () => {
    it(`toNumber(0) = 0`, () => {
      expect(toNumber(0)).toBe(0);
    });

    it(`toNumber(1) = 1`, () => {
      expect(toNumber(1)).toBe(1);
    });

    it(`toNumber('1234') = 1234`, () => {
      expect(toNumber('1234')).toBe(1234);
    });

    it(`toNumber('1234.00') = 1234`, () => {
      expect(toNumber('1234.00')).toBe(1234);
    });
  });

  describe('should be return 0 value if input is not number', () => {
    it(`toNumber('aabb234') = 0`, () => {
      expect(toNumber('aabb234')).toBe(0);
    });
  });
  describe('should be return defined default value if input is not number', () => {
    it(`toNumber('aabb222', 100) = 100`, () => {
      expect(toNumber('aabb222', 100)).toBe(100);
    });

    it(`toNumber('aabb222', null) = null`, () => {
      expect(toNumber('aabb222', null)).toBeNull();
    });
  });
});
