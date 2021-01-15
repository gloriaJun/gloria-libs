import { hasEveryKeys, hasSomeKeys } from './hasKeys';

const obj = { name: 'Kate', age: 10, sex: 'F' };
const objString = JSON.stringify(obj);

describe('hasKeys', () => {
  describe('hasEveryKeys', () => {
    describe('should be return true if object has the keys', () => {
      it(`hasEveryKeys(${objString}, 'name')`, () => {
        expect(hasEveryKeys(obj, 'name')).toBeTruthy();
      });

      it(`hasEveryKeys(${objString}, ['name', 'age'])`, () => {
        expect(hasEveryKeys(obj, ['name', 'age'])).toBeTruthy();
      });
    });

    describe('should be return true if object do not have the keys', () => {
      it(`hasEveryKeys(null, 'name')`, () => {
        expect(hasEveryKeys(null, 'name')).toBeFalsy();
      });

      it(`hasEveryKeys([${Object.keys(obj).join(', ')}], 'name')`, () => {
        expect(hasEveryKeys(Object.keys(obj), 'name')).toBeFalsy();
      });

      it(`hasEveryKeys(${objString}, 'job')`, () => {
        expect(hasEveryKeys(obj, 'job')).toBeFalsy();
      });

      it(`hasEveryKeys(${objString}, ['name', 'job'])`, () => {
        expect(hasEveryKeys(obj, ['name', 'job'])).toBeFalsy();
      });
    });
  });

  describe('hasSomeKeys', () => {
    describe('should be return true if object has the keys', () => {
      it(`hasSomeKeys(${objString}, ['job', 'name'])`, () => {
        expect(hasSomeKeys(obj, ['job', 'name'])).toBeTruthy();
      });
    });
  });
});
