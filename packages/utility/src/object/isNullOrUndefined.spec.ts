import { isNull, isUndefined, isNullOrUndefined } from './isNullOrUndefined';

describe('isNullOrUndefined', () => {
  describe('should be return true if input is null', () => {
    it(`isNull(null) === true`, () => {
      expect(isNull(null)).toBe(true);
    });

    // it(`isNullOrUndefined('null') === true`, () => {
    //   expect(isNullOrUndefined('null')).toBe(true);
    // });
  });

  describe('should be return true if input is undefined', () => {
    it(`isUndefined(undefined) === true`, () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    // it(`isNullOrUndefined('undefined') === true`, () => {
    //   expect(isNullOrUndefined('undefined')).toBe(true);
    // });
  });

  describe('should be return false if input is not null or undefined', () => {
    it(`isNullOrUndefined('') === false`, () => {
      expect(isNullOrUndefined('')).toBe(false);
    });

    it(`isNullOrUndefined({}) === false`, () => {
      expect(isNullOrUndefined({})).toBe(false);
    });

    it(`isNullOrUndefined('true') === false`, () => {
      expect(isNullOrUndefined('true')).toBe(false);
    });

    it(`isNullOrUndefined(true) === false`, () => {
      expect(isNullOrUndefined(true)).toBe(false);
    });

    it(`isNullOrUndefined(false) === false`, () => {
      expect(isNullOrUndefined(false)).toBe(false);
    });

    it(`isNullOrUndefined(0) === false`, () => {
      expect(isNullOrUndefined(0)).toBe(false);
    });

    it(`isNullOrUndefined(1) === false`, () => {
      expect(isNullOrUndefined(1)).toBe(false);
    });
  });
});
