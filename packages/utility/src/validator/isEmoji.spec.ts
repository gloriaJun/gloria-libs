import { isEmoji } from './isEmoji';

describe('isEmoji', () => {
  describe('shoud be return true if input is not the emoji', () => {
    it(`isEmoji('😱')`, () => {
      expect(isEmoji(`😱`)).toBeTruthy();
    });

    it(`isEmoji('✅')`, () => {
      expect(isEmoji(`✅`)).toBeTruthy();
    });

    it(`isEmoji('text🏄🏻')`, () => {
      expect(isEmoji(`text🏄🏻`)).toBeTruthy();
    });
  });

  describe('shoud be return false if input is not the emoji', () => {
    it(`isEmoji(false)`, () => {
      expect(isEmoji(false)).toBeFalsy();
    });

    it(`isEmoji('text')`, () => {
      expect(isEmoji('text')).toBeFalsy();
    });
  });
});
