import { isNotNullOrUndefined } from './isNullOrUndefined';

export const isObject = (obj?: unknown) => {
  return (
    isNotNullOrUndefined(obj) &&
    typeof obj === 'object' &&
    !(obj instanceof Array)
  );
};
