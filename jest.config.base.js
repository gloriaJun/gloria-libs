module.exports = {
  projects: ['<rootDir>'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
  testRegex: ['((\\.|/)(test|spec))\\.([tj]sx?)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  //   testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  // Gatsby includes un-transpiled ES6 code. Exclude the gatsby module.
  //   transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {},
  //   testURL: `http://localhost`,
  //   setupFiles: ['<rootDir>/src/__tests__/loadershim.ts'],
  //   setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup-tests.ts'],
  // 테스트 전에 실행되는 global setup 모듈을 지정할 수 있다.
  // globalSetup: "./src/test/setup.ts",
  // 테스트가 끝난 후에 실행되는 global teardown 모듈을 지정할 수 있다.
  // globalTeardown: "./src/test/teardown.ts",
  /**
   * coverage
   */
  collectCoverage: true,
  //   coveragePathIgnorePatterns: ['(test/.*.mock).(jsx?|tsx?)$'],
  coverageDirectory: '<rootDir>/coverage/',
};
