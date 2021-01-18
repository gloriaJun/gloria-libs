export const toOrdinal = (val: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const i = val % 100;

  return `${val}${s[(i - 20) % 10] || s[i] || s[0]}`;
};
