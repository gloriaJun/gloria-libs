import { isObject } from '../validator';

const methods = {
  every: 'every',
  some: 'some',
} as const;

const hasKeys = (
  method: typeof methods[keyof typeof methods],
  obj: unknown,
  key: string | string[],
) => {
  return (
    isObject(obj) &&
    (typeof key === 'string' ? [key] : key)[method]((k) => {
      return Object.prototype.hasOwnProperty.call(obj, k);
    })
  );
};

export const hasEveryKeys = (obj: unknown, key: string | string[]) => {
  return hasKeys(methods.every, obj, key);
};

export const hasSomeKeys = (obj: unknown, key: string | string[]) => {
  return hasKeys(methods.some, obj, key);
};

export const hasKey = (obj: unknown, key: string) => {
  return hasKeys(methods.some, obj, key);
};
