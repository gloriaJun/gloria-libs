export const isEmoji = (val: unknown) => {
  const re = new RegExp(
    '(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])',
    'ig',
  );

  return typeof val === 'string' && re.test(val);
};
