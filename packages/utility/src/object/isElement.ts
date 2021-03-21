export const isElement = (obj: unknown): obj is Element => {
  return obj instanceof HTMLElement;
};
