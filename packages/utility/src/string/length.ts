import GraphemeSplitter from 'grapheme-splitter';

export const length = (
  val: number | string | null | undefined,
  excludeChar?: string | RegExp,
) => {
  const graphemeSplitter = new GraphemeSplitter();
  let str = typeof val === 'number' ? val.toString() : val || '';

  if (excludeChar) {
    str = str.replace(excludeChar, '');
  }

  return graphemeSplitter.countGraphemes(str);
};
