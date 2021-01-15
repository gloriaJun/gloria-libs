import { isEmpty } from './isEmpty';

export const isEmptyString = (v: string) => {
  const str = v.trim();

  return isEmpty(str);
};

export const isNotEmptyString = (v: string) => !isEmptyString(v);
