import { floor } from './round';

export const percentage = (val: number, total = 100) => {
  return floor((val / total) * 100, 0);
};
