import { sum } from './sum';

describe('sum', () => {
  it(`sum(1,2) = 3`, () => {
    expect(sum(1, 2)).toBe(3);
  });

  it(`sum(1, '2.30') = 3.3`, () => {
    expect(sum(1, '2.30')).toBe(3.3);
  });

  it(`sum(1, 2, 3) = 6`, () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
