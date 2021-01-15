import GraphemeSplitter from 'grapheme-splitter';

export const length = (str: string): number => {
  const graphemeSplitter = new GraphemeSplitter();
  return graphemeSplitter.countGraphemes(str);
};
