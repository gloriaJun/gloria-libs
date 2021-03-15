type IOjbectType<T> = T | null | undefined;

const isNull = <T>(obj: IOjbectType<T>) => {
  return obj === null;
};

const isUndefined = <T>(obj: IOjbectType<T>) => {
  return typeof obj === 'undefined';
};

export const isNullOrUndefined = <T>(obj: IOjbectType<T>) => {
  return isNull(obj) || isUndefined(obj);
};

export const isNotNullOrUndefined = <T>(obj: IOjbectType<T>) => {
  return !isNullOrUndefined(obj);
};
