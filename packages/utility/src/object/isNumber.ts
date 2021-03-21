import { isEmptyString } from '../string/isEmptyString';

import { isString } from './isString';

const numberValidator = (val: number) => {
  // return !isNaN(val) && isFinite(val);
  return isFinite(val);
};

/**
 * Returns true if object is a Number.
 * Also if v is number of string type, it'll be check after parsing.
 * @param v
 * @returns
 */
export const isNumber = (v?: unknown): v is number => {
  if (typeof v === 'number') {
    return numberValidator(v);
  } else if (isString(v)) {
    return !isEmptyString(v) && numberValidator(Number(v));
  }

  return false;
};
