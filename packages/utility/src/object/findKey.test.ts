import { findKey } from './findKey';

const obj = { name: 'Kate', age: 10, sex: 'F' };

describe('findKey', () => {
  it(`should be return 'name' by value of key`, () => {
    expect(findKey(obj, 'Kate')).toBe('name');
  });

  it(`should be return 'age' by value of key`, () => {
    expect(findKey(obj, 10)).toBe('age');
  });

  it(`should be return null when obj is null`, () => {
    expect(findKey({}, 'Kate')).toBeNull();
  });

  it(`should be return null when obj has not value`, () => {
    expect(findKey(obj, 'Katte')).toBeNull();
  });

  it(`should be return null when value is null`, () => {
    expect(findKey(obj, null)).toBeNull();
  });
});
