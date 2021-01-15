import { percentage } from './percentage';

describe('percentage', () => {
  it(`percentage(0) = 0`, () => {
    expect(percentage(0)).toBe(0);
  });

  it(`percentage(100) = 100`, () => {
    expect(percentage(100)).toBe(100);
  });

  it(`percentage(78.35) = 78`, () => {
    expect(percentage(78.35)).toBe(78);
  });

  it(`percentage(3835, 3000) = 127`, () => {
    expect(percentage(3835, 3000)).toBe(127);
  });
});
