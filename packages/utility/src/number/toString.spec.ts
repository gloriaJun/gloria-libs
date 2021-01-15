import { toString } from './toString';

describe('toString', () => {
  it(`toString(100) = "100.00"`, () => {
    expect(toString(100)).toBe('100.00');
  });

  it(`toString('834') = "834.00"`, () => {
    expect(toString('834')).toBe('834.00');
  });

  it(`toString('834', 0) = "834"`, () => {
    expect(toString('834', 0)).toBe('834');
  });

  it(`toString('834', 1) = "834.0"`, () => {
    expect(toString('834', 1)).toBe('834.0');
  });
});
