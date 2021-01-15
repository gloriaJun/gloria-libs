import { isNullOrUndefined } from './isNullOrUndefined';

describe('isNullOrUndefined', () => {
  describe('should be return true if input is null', () => {
    it(`isNullOrUndefined(null) === true`, () => {
      expect(isNullOrUndefined(null)).toBe(true);
    });

    it(`isNullOrUndefined('null') === true`, () => {
      expect(isNullOrUndefined('null')).toBe(true);
    });
  });

  describe('should be return true if input is undefined', () => {
    it(`isNullOrUndefined(undefined) === true`, () => {
      expect(isNullOrUndefined(undefined)).toBe(true);
    });

    it(`isNullOrUndefined('undefined') === true`, () => {
      expect(isNullOrUndefined('undefined')).toBe(true);
    });
  });

  describe('should be return false if input is not null or undefined', () => {
    it(`isNullOrUndefined('') === false`, () => {
      expect(isNullOrUndefined('')).toBe(false);
    });

    it(`isNullOrUndefined({}) === false`, () => {
      expect(isNullOrUndefined({})).toBe(false);
    });
  });
});
