import { isTrue, isFalse } from './isTrue';

describe('isTrue', () => {
  it(`isTrue(true)`, () => {
    expect(isTrue(true)).toBeTruthy();
  });

  it(`isTrue('true')`, () => {
    expect(isTrue('true')).toBeTruthy();
  });

  it(`isTrue('false')`, () => {
    expect(isTrue('false')).toBeFalsy();
  });
});

describe('isFalse', () => {
  it(`isFalse(false)`, () => {
    expect(isFalse(false)).toBeTruthy();
  });

  it(`isFalse('false')`, () => {
    expect(isFalse('false')).toBeTruthy();
  });

  it(`isFalse('true')`, () => {
    expect(isFalse('true')).toBeFalsy();
  });
});
