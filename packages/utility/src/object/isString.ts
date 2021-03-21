export const isString = (v: unknown): v is string => {
  return typeof v === 'string';
};
