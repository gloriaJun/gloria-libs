type IOjbectType<T> = T | null | undefined;

export const isNull = <T>(obj: IOjbectType<T>): obj is null => {
  return obj === null;
};

export const isUndefined = <T>(obj: IOjbectType<T>): obj is undefined => {
  return typeof obj === 'undefined';
};

export const isNullOrUndefined = <T>(
  obj: IOjbectType<T>,
): obj is null | undefined => {
  return isNull(obj) || isUndefined(obj);
};
