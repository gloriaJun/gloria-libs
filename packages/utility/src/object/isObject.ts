import { isNullOrUndefined } from './isNullOrUndefined';

/**
 * Returns true if value is an Object.
 *
 * isObject({}) => true
 * isObject([]) => false
 *
 * @param obj
 * @returns
 */
export const isObject = (obj?: unknown): obj is Record<string, unknown> => {
  return (
    !isNullOrUndefined(obj) &&
    typeof obj === 'object' &&
    !(obj instanceof Array)
  );
};
