import { isNumber } from './isNumber';

export const isFormatNumber = (val?: unknown) => {
  let parseVal = val;

  if (typeof parseVal === 'string') {
    const regExp = new RegExp(
      '^((-|\\+?)([0-9]{1,3}(,?[0-9])*)(\\.[0-9]+|\\.)?|\\.[0-9]+)$',
      'gm',
    );

    if (!regExp.test(parseVal.trim())) {
      return false;
    }

    parseVal = parseVal.replace(/,/gi, '');
  }

  return isNumber(parseVal);
};
