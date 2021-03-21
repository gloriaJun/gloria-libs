import { isBoolean } from '../object/isBoolean';

export const isTrue = (val: unknown) => {
  return isBoolean(val) ? val : val === 'true';
};

export const isFalse = (val: unknown) => {
  return isBoolean(val) ? !val : val === 'false';
};
