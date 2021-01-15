import { isFormatNumber } from './isFormatNumber';

describe('isFormatNumber', () => {
  describe('should be return true if input is formatted number', () => {
    it(`isNumeric('34')`, () => {
      expect(isFormatNumber('34')).toBe(true);
    });

    it(`isNumeric('34.123')`, () => {
      expect(isFormatNumber('34.123')).toBe(true);
    });

    it(`isNumeric('1,234.123')`, () => {
      expect(isFormatNumber('1,234.123')).toBe(true);
    });

    it(`isNumeric('1,234,567.00')`, () => {
      expect(isFormatNumber('1,234,567.00')).toBe(true);
    });

    it(`isNumeric('1,234,567,1234.00')`, () => {
      expect(isFormatNumber('1,234,567,1234.00')).toBe(true);
    });

    it(`isNumeric('1,234,567,1.00')`, () => {
      expect(isFormatNumber('1,234,567,1.00')).toBe(true);
    });

    it(`isNumeric(' 1,234.123  ')`, () => {
      expect(isFormatNumber(' 1,234.123  ')).toBe(true);
    });
  });

  describe('should be return false if input is not formatted number', () => {
    it(`isNumeric('1,23xxxx4.123')`, () => {
      expect(isFormatNumber('1,23xxxx4.123')).toBe(false);
    });

    it(`isNumeric('xx1,234,567.00')`, () => {
      expect(isFormatNumber('xx1,234,567.00')).toBe(false);
    });

    it(`isNumeric('xx1,234,567.00xx')`, () => {
      expect(isFormatNumber('1,234,567.00xx')).toBe(false);
    });

    it(`isNumeric('1,234,567,.00')`, () => {
      expect(isFormatNumber('1,234,567,.00')).toBe(false);
    });

    it(`isNumeric('1,234,567,')`, () => {
      expect(isFormatNumber('1,234,567,')).toBe(false);
    });
  });
});
