import { isNullOrUndefined } from '../object/isNullOrUndefined';

export const isEmptyString = (v: INullable<string>) => {
  return isNullOrUndefined(v) || v.trim() === '';
};
