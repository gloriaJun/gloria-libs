import { length } from './length';

describe('length', () => {
  describe('should be returned without point length', () => {
    it(`length(null) = 0`, () => {
      expect(length(null)).toBe(0);
    });

    it(`length(undefined) = 0`, () => {
      expect(length(undefined)).toBe(0);
    });

    it(`length('') = 0`, () => {
      expect(length('')).toBe(0);
    });

    it(`length(0) = 1`, () => {
      expect(length(0)).toBe(1);
    });

    it(`length(4.66) = 3`, () => {
      expect(length(4.66)).toBe(3);
    });

    it(`length('798.') = 3`, () => {
      expect(length('798.')).toBe(3);
    });
  });

  describe('should be returned with point length', () => {
    it(`length(4.66, true) = 4`, () => {
      expect(length(4.66, true)).toBe(4);
    });

    it(`length('798.', true) = 4`, () => {
      expect(length('798.', true)).toBe(4);
    });
  });
});
