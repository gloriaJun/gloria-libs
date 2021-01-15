import { toUpperSnakeCase } from './toUpperSnakeCase';

describe('toUpperSnakeCase', () => {
  it(`toUpperSnakeCase('') = ""`, () => {
    expect(toUpperSnakeCase('')).toBe('');
  });

  it(`toUpperSnakeCase('camelCase') = "CAMEL_CASE"`, () => {
    expect(toUpperSnakeCase('camelCase')).toBe('CAMEL_CASE');
  });

  it(`toUpperSnakeCase(' transfer  ') = "TRANSFER"`, () => {
    expect(toUpperSnakeCase(' transfer  ')).toBe('TRANSFER');
  });

  it(`toUpperSnakeCase('hello wrold') = "HELLO_WORLD"`, () => {
    expect(toUpperSnakeCase('hello world')).toBe('HELLO_WORLD');
  });

  it(`toUpperSnakeCase('hello game-world mixed_string ') = "HELLO_GAME_WORLD_MIXED_STRING"`, () => {
    expect(toUpperSnakeCase('hello game-world mixed_string ')).toBe(
      'HELLO_GAME_WORLD_MIXED_STRING',
    );
  });
});
