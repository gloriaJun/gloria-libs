import { toNumber } from './toNumber';

export const sum = (...args: (number | string)[]) => {
  return args.reduce(
    (result: number, val) => result + (toNumber(val) as number),
    0,
  );
};
