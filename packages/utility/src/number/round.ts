const TYPE = {
  FLOOR: 'floor',
  ROUND: 'round',
  CEIL: 'ceil',
} as const;

// reference: https://github.com/lodash/lodash/blob/master/.internal/createRound.js
function createRound(methodName: typeof TYPE[keyof typeof TYPE]) {
  const func = Math[methodName];
  return (number: number, precision?: number) => {
    precision =
      precision == null
        ? 0
        : precision >= 0
        ? Math.min(precision, 292)
        : Math.max(precision, -292);

    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      let pair = `${number}e`.split('e');
      const value = func(+`${pair[0]}e${+pair[1] + precision}`);

      pair = `${value}e`.split('e');
      return +`${pair[0]}e${+pair[1] - precision}`;
    }

    return func(number);
  };
}

// reference: https://github.com/lodash/lodash/blob/master/floor.js
export const floor = createRound(TYPE.FLOOR);
// reference: https://github.com/lodash/lodash/blob/master/round.js
export const round = createRound(TYPE.ROUND);
// reference: https://github.com/lodash/lodash/blob/master/ceil.js
export const ceil = createRound(TYPE.CEIL);
