const isNull = (val?: unknown) => {
  return val === null || val === 'null';
};

const isUndefined = (val?: unknown) => {
  return val === undefined || val === 'undefined';
};

export const isNullOrUndefined = (val?: unknown) => {
  return isNull(val) || isUndefined(val);
};

export const isNotNullOrUndefined = (val?: unknown) => {
  return !isNullOrUndefined(val);
};
