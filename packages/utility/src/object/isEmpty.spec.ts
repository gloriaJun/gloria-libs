import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  describe('should be return true if input is empty string', () => {
    it(`isEmpty(null)`, () => {
      expect(isEmpty(null)).toBe(true);
    });

    it(`isEmpty([])`, () => {
      expect(isEmpty([])).toBe(true);
    });

    it(`isEmpty({})`, () => {
      expect(isEmpty({})).toBe(true);
    });

    it(`isEmpty('')`, () => {
      expect(isEmpty('')).toBe(true);
    });
  });

  describe('should be return false if input is number', () => {
    it(`isEmpty(0)`, () => {
      expect(isEmpty(0)).toBe(false);
    });

    it(`isEmpty(-100)`, () => {
      expect(isEmpty(-100)).toBe(false);
    });
  });

  describe('should be return false if input is not empty', () => {
    it(`isEmpty([100])`, () => {
      expect(isEmpty([100])).toBe(false);
    });

    it(`isEmpty({ a: 'test' })`, () => {
      expect(isEmpty({ a: 'test' })).toBe(false);
    });

    it(`isEmpty('  ')`, () => {
      expect(isEmpty('  ')).toBe(false);
    });
  });
});
