import { toNumber } from './toNumber';

const DEFAULT_PRECISION = 2;

export const toFormatNumber = (
  val: string | number,
  options:
    | number
    | {
        precision?: number;
        isCurrency?: boolean;
      } = DEFAULT_PRECISION,
) => {
  const { precision = DEFAULT_PRECISION, isCurrency = true } =
    typeof options === 'object' ? options : {};

  const regexp = new RegExp(/(\d)(?=(\d{3})+(?!\d))/, 'ig');
  const num = (toNumber(val, 0) as number).toFixed(
    typeof options === 'number' ? options : precision,
  );

  return isCurrency ? num.replace(regexp, `$1,`) : num;
};
