import { toNumber } from '../number';

export const isAmountFree = (val: number | string) => {
  return toNumber(val) === 0;
};
