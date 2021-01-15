import { isNullOrUndefined } from './isNullOrUndefined';

export const isEmpty = (v?: unknown) => {
  if (typeof v === 'number') {
    return false;
  } else if (isNullOrUndefined(v)) {
    return true;
  } else if (typeof v === 'string') {
    return v === '';
  } else if (typeof v === 'object') {
    for (const key in v) {
      if (Object.prototype.hasOwnProperty.call(v, key)) return false;
    }
  }

  return true;
};

export const isNotEmpty = (v?: unknown) => !isEmpty(v);
