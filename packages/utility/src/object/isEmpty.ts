import { isNullOrUndefined } from './isNullOrUndefined';
import { isString } from './isString';

/**
 * Returns true if collection has no elements.
 * For strings and array-like objects it checks if the length property is 0.
 *
 * @param v
 * @returns
 */
export const isEmpty = (v?: unknown): v is null | undefined => {
  if (isNullOrUndefined(v)) {
    return true;
  } else if (v && typeof v === 'object') {
    return Object.keys(v).length === 0;
  } else if (isString(v)) {
    return v.length === 0;
  }

  return false;
};
