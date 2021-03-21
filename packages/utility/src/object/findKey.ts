type IObjectType<T> = Record<string, T> | null;

export const findKey = <T>(obj: IObjectType<T>, value?: T) => {
  let result = null;

  if (obj) {
    const keys = Object.keys(obj);
    const len = keys.length;

    for (let i = 0; i < len; i++) {
      const key = keys[i];
      if (obj[key] === value) {
        result = key;
        break;
      }
    }
  }

  return result;
};
