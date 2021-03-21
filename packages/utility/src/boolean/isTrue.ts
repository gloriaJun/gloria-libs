export const isTrue = (val: unknown) => {
  return typeof val === 'boolean' ? val : val === 'true';
};

export const isFalse = (val: unknown) => {
  return typeof val === 'boolean' ? !val : val === 'false';
};
