import { isNumber } from './isNumber';

describe('isNumber', () => {
  describe('should be return true if input is number', () => {
    it(`isNumeric(0)`, () => {
      expect(isNumber(0)).toBe(true);
    });

    it(`isNumeric(1)`, () => {
      expect(isNumber(1)).toBe(true);
    });

    it(`isNumeric(-999)`, () => {
      expect(isNumber(-999)).toBe(true);
    });

    it(`isNumeric(1234.56)`, () => {
      expect(isNumber(1234.56)).toBe(true);
    });

    it(`isNumeric(-1234.56)`, () => {
      expect(isNumber(-1234.56)).toBe(true);
    });

    it(`isNumeric(1234.0)`, () => {
      expect(isNumber(1234.0)).toBe(true);
    });

    it(`isNumeric(+1234.0)`, () => {
      expect(isNumber(+1234.0)).toBe(true);
    });
  });

  describe('should be return true if input is string number', () => {
    it(`isNumeric('0')`, () => {
      expect(isNumber('0')).toBe(true);
    });

    it(`isNumeric('0.999')`, () => {
      expect(isNumber('0.999')).toBe(true);
    });

    it(`isNumeric('-999')`, () => {
      expect(isNumber('-999')).toBe(true);
    });

    it(`isNumeric('+999')`, () => {
      expect(isNumber('+999')).toBe(true);
    });

    it(`isNumeric('1234.00')`, () => {
      expect(isNumber('1234.00')).toBe(true);
    });

    it(`isNumeric('1234.')`, () => {
      expect(isNumber('1234.')).toBe(true);
    });
  });

  describe('should be return true if input is string number with space', () => {
    it(`isNumeric(' 1234.123')`, () => {
      expect(isNumber(' 1234.123')).toBe(true);
    });

    it(`isNumeric(' 1234.123  ')`, () => {
      expect(isNumber(' 1234.123  ')).toBe(true);
    });
  });

  describe('should be return false if input is empty value', () => {
    it(`isNumeric('')`, () => {
      expect(isNumber('')).toBe(false);
    });

    it(`isNumeric('  ')`, () => {
      expect(isNumber('')).toBe(false);
    });

    it(`isNumeric(Infinity)`, () => {
      expect(isNumber(Infinity)).toBe(false);
    });

    it(`isNumeric(NaN)`, () => {
      expect(isNumber(NaN)).toBe(false);
    });

    it(`isNumeric(null)`, () => {
      expect(isNumber(null)).toBe(false);
    });

    it(`isNumeric(undefined)`, () => {
      expect(isNumber(undefined)).toBe(false);
    });
  });

  describe('should be return false if input is not a number', () => {
    it(`isNumeric({})`, () => {
      expect(isNumber({})).toBe(false);
    });

    it(`isNumeric(1ab234)`, () => {
      expect(isNumber('1ab234')).toBe(false);
    });

    it(`isNumeric(12323.12.00)`, () => {
      expect(isNumber('12323.12.00')).toBe(false);
    });

    it(`isNumeric('+-999')`, () => {
      expect(isNumber('+-999')).toBe(false);
    });
  });
});
