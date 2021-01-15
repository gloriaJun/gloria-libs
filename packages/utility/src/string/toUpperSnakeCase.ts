const toSnakeCase = (val: string) => {
  const re = new RegExp(
    '[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+',
    'g',
  );

  return val?.match(re)?.join('_') || '';
};
export const toUpperSnakeCase = (val: string) => {
  return toSnakeCase(val).toUpperCase();
};
