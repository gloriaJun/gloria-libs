import { ceil, floor, round } from './round';

describe('round', () => {
  describe('floor', () => {
    it(`floor(145.66666) = 145`, () => {
      expect(floor(145.66666)).toBe(145);
    });

    it(`floor(145.66666, 2) = 145.66`, () => {
      expect(floor(145.66666, 2)).toBe(145.66);
    });

    it(`floor(145.66666, -2) = 100`, () => {
      expect(floor(145.66666, -2)).toBe(100);
    });
  });

  describe('round', () => {
    it(`round(145.66666) = 146`, () => {
      expect(round(145.66666)).toBe(146);
    });

    it(`round(145.66666, 2) = 145.67`, () => {
      expect(round(145.66666, 2)).toBe(145.67);
    });

    it(`round(145.66666, -2) = 100`, () => {
      expect(round(145.66666, -2)).toBe(100);
    });
  });

  describe('ceil', () => {
    it(`ceil(145.66666) = 146`, () => {
      expect(ceil(145.66666)).toBe(146);
    });

    it(`ceil(145.66666, 2) = 145.67`, () => {
      expect(ceil(145.66666, 2)).toBe(145.67);
    });

    it(`ceil(145.66666, -2) = 200`, () => {
      expect(ceil(145.66666, -2)).toBe(200);
    });
  });
});
