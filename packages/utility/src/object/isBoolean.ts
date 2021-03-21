export const isBoolean = (v: unknown): v is boolean => {
  return typeof v === 'boolean';
};
