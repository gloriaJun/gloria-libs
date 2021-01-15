import { toFormatNumber } from './toFormatNumber';

export const toString = (val: string | number, precision?: number) => {
  return toFormatNumber(val, {
    isCurrency: false,
    precision,
  });
};
