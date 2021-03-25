import { isObject } from './isObject';

describe('isObject', () => {
  describe('should be return true if input is the plain object', () => {
    it(`isObject({})`, () => {
      expect(isObject({})).toBeTruthy();
    });
  });

  describe('should be return false if input is not the plain object', () => {
    it(`isObject([])`, () => {
      expect(isObject([])).toBeFalsy();
    });

    it(`isObject(null)`, () => {
      expect(isObject(null)).toBeFalsy();
    });

    it(`isObject(undefined)`, () => {
      expect(isObject(undefined)).toBeFalsy();
    });
  });
});
