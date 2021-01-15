export const length = (
  val: number | string | null | undefined,
  isIncludePoint = false,
) => {
  let str = typeof val === 'number' ? val.toString() : val || '';

  if (!isIncludePoint) {
    str = str.replace('.', '');
  }

  return str.length;
};
