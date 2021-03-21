import { isObject } from './isObject';
import { isString } from './isString';

type IObjectType<T> = Record<string, T> | Array<T> | null;
type IKeyType = undefined | string;
type IKeysType = IKeyType | string[];

const methods = {
  every: 'every',
  some: 'some',
} as const;

const hasKeys = <T>(
  method: typeof methods[keyof typeof methods],
  obj: IObjectType<T>,
  key: IKeysType,
) => {
  return (
    isObject(obj) &&
    key &&
    (isString(key) ? [key] : key)[method]((k) => {
      return Object.prototype.hasOwnProperty.call(obj, k);
    })
  );
};

export const hasEveryKeys = <T>(obj: IObjectType<T>, key: IKeysType) => {
  return hasKeys(methods.every, obj, key);
};

export const hasSomeKeys = <T>(obj: IObjectType<T>, key: IKeysType) => {
  return hasKeys(methods.some, obj, key);
};

export const hasKey = <T>(obj: IObjectType<T>, key: IKeyType) => {
  return hasKeys(methods.some, obj, key);
};
