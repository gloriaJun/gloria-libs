export const toNumber = (
  val: string | number,
  defaultValue: number | null = 0,
) => {
  if (!val || typeof val === 'object') {
    return defaultValue;
  }

  const num = typeof val === 'string' ? parseFloat(val) : val;

  return isNaN(num) ? defaultValue : num;
};
