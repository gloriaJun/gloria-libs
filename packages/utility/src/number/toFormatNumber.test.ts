import { toFormatNumber } from './toFormatNumber';

describe('toFormatNumber', () => {
  describe('(default) should be returned formatted number with 2 precision', () => {
    it(`toFormatNumber('') = '0.00'`, () => {
      expect(toFormatNumber('')).toBe('0.00');
    });

    it(`toFormatNumber(0) = '0.00'`, () => {
      expect(toFormatNumber(0)).toBe('0.00');
    });

    it(`toFormatNumber(-34) = '-34.00'`, () => {
      expect(toFormatNumber(-34)).toBe('-34.00');
    });

    it(`toFormatNumber('34') = '34.00'`, () => {
      expect(toFormatNumber('34')).toBe('34.00');
    });

    it(`toFormatNumber('34.123') = '34.12'`, () => {
      expect(toFormatNumber('34.123')).toBe('34.12');
    });

    it(`isNumeric('1234567.00') = '1,234,567.00'`, () => {
      expect(toFormatNumber('1234567.00')).toBe('1,234,567.00');
    });

    it(`isNumeric('-1234567.00') = '-1,234,567.00'`, () => {
      expect(toFormatNumber('-1234567.00')).toBe('-1,234,567.00');
    });
  });

  describe('should be returned formatted number with the customized precision', () => {
    it(`isNumeric('1234567.00', 0) = '1,234,567'`, () => {
      expect(toFormatNumber('1234567.00', 0)).toBe('1,234,567');
    });
  });

  describe('should be returned non-currency formatted number', () => {
    it(`isNumeric('1234567.00', { isCurrency: false }) = '1234567.00'`, () => {
      expect(toFormatNumber('1234567.00', { isCurrency: false })).toBe(
        '1234567.00',
      );
    });

    it(`isNumeric('1234567.00', { precision: 1, isCurrency: false }) = '1234567.0'`, () => {
      expect(
        toFormatNumber('1234567.00', { precision: 1, isCurrency: false }),
      ).toBe('1234567.0');
    });

    it(`isNumeric('1234567.00', { precision: 0, isCurrency: false }) = '1234567'`, () => {
      expect(
        toFormatNumber('1234567.00', { precision: 0, isCurrency: false }),
      ).toBe('1234567');
    });
  });
});
