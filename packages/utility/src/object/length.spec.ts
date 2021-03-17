import { length } from './length';

describe('length', () => {
  describe('null or undefined', () => {
    it(`length(null) = 0`, () => {
      expect(length(null)).toBe(0);
    });

    it(`length(undefined) = 0`, () => {
      expect(length(undefined)).toBe(0);
    });
  });

  describe('string type', () => {
    it(`length('') = 0`, () => {
      expect(length('')).toBe(0);
    });

    it(`length('798.') = 4`, () => {
      expect(length('798.')).toBe(4);
    });

    it(`length('798.', /\./) = 3`, () => {
      expect(length('798.', /\./)).toBe(3);
    });

    it(`length('😋Emoji🧚🏾‍♀️') = 7`, () => {
      expect(length('😋Emoji🧚🏾‍♀️')).toBe(7);
    });
  });

  describe('number type', () => {
    it(`length(0) = 1`, () => {
      expect(length(0)).toBe(1);
    });

    it(`length(4.66) = 4`, () => {
      expect(length(4.66)).toBe(4);
    });

    it(`length(4.66, '.') = 3`, () => {
      expect(length(4.66, '.')).toBe(3);
    });
  });
});
