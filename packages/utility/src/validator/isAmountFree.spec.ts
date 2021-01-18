import { isAmountFree } from './isAmountFree';

describe('isAmountFree', () => {
  describe('should be return true if input is 0', () => {
    it(`isAmountFree(0)`, () => {
      expect(isAmountFree(0)).toBe(true);
    });

    it(`isAmountFree('0')`, () => {
      expect(isAmountFree('0')).toBe(true);
    });
  });

  describe('should be return false if input is not 0', () => {
    it(`isAmountFree(10)`, () => {
      expect(isAmountFree(10)).toBe(false);
    });

    it(`isAmountFree('999')`, () => {
      expect(isAmountFree('999')).toBe(false);
    });

    it(`isAmountFree(-9)`, () => {
      expect(isAmountFree(-9)).toBe(false);
    });

    it(`isAmountFree(0.85)`, () => {
      expect(isAmountFree(0.85)).toBe(false);
    });

    it(`isAmountFree('123.00')`, () => {
      expect(isAmountFree('123.00')).toBe(false);
    });
  });
});
