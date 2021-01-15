import { toOrdinal } from './toOrdinal';

describe('toOrdinal', () => {
  describe('should be returned "st" suffix', () => {
    it(`toOrdinal(1) = '1st'`, () => {
      expect(toOrdinal(1)).toBe('1st');
    });

    it(`toOrdinal(231) = '231st'`, () => {
      expect(toOrdinal(231)).toBe('231st');
    });
  });

  describe('should be returned "nd" suffix', () => {
    it(`toOrdinal(2) = '2nd'`, () => {
      expect(toOrdinal(2)).toBe('2nd');
    });
  });

  describe('should be returned "rd" suffix', () => {
    it(`toOrdinal(3) = '3nd'`, () => {
      expect(toOrdinal(3)).toBe('3rd');
    });
  });

  describe('should be returned "th" suffix', () => {
    it(`toOrdinal(4) = '4th'`, () => {
      expect(toOrdinal(4)).toBe('4th');
    });

    it(`toOrdinal(10) = '10th'`, () => {
      expect(toOrdinal(10)).toBe('10th');
    });

    it(`toOrdinal(89) = '89th'`, () => {
      expect(toOrdinal(89)).toBe('89th');
    });
  });
});
