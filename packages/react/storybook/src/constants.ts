const rootCategory = {
  components: 'Components',
  hooks: 'Hooks',
} as const;

export const componentsCategory = {
  atoms: `${rootCategory.components} / Atoms`,
  molecules: `${rootCategory.components} / Molecules`,
  organisms: `${rootCategory.components} / Organisms`,
} as const;

// const languageCodes = {
//   korean: 'ko',
//   english: 'en',
//   japanese: 'ja',
//   chinese: 'zh',
//   spanish: 'es',
// } as const; // const assertion
// // 속성 값을 변경할 수 없음
// // 속성의 타입으로 리터럴 타입이 지정됨
// type LanguageCode = typeof languageCodes[keyof typeof languageCodes];
// const code: LanguageCode = languageCodes.korean;
