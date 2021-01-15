import { isNotEmptyString } from './isEmptyString';

const numberValidator = (val: number) => {
  // return !isNaN(val) && isFinite(val);
  return isFinite(val);
};

export const isNumber = (val?: unknown) => {
  if (typeof val === 'number') {
    return numberValidator(val);
  } else if (typeof val === 'string') {
    const parseVal = Number(val);
    return isNotEmptyString(val) && numberValidator(parseVal);
  }

  return false;
};
