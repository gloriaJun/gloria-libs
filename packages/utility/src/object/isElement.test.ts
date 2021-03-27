import { isElement } from './isElement';

describe('isElement', () => {
  it('isElement(document.body) = true', () => {
    expect(isElement(document.body)).toBeTruthy();
  });

  it('isElement(document.querySelector("body")) = true', () => {
    expect(isElement(document.querySelector('body'))).toBeTruthy();
  });

  it('isElement(document.createElement("div")) = true', () => {
    expect(isElement(document.createElement('div'))).toBeTruthy();
  });

  it('isElement(null) = false', () => {
    expect(isElement(null)).toBeFalsy();
  });

  it('isElement(undefined) = false', () => {
    expect(isElement(undefined)).toBeFalsy();
  });

  it('isElement("<body>") = false', () => {
    expect(isElement('<body>')).toBeFalsy();
  });

  it('isElement({}) = false', () => {
    expect(isElement({})).toBeFalsy();
  });
});
