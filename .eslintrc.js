module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './packages/react/*/tsconfig.json',
      './packages/utility/*/tsconfig.json',
    ],
    // tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
    // ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features,
  },
  plugins: ['jest'],
  extends: [
    'gloria-base',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
  ignorePatterns: ['node_modules', '*.config.js', '.*rc.js', 'dist'],
  overrides: [
    // all test files
    // {
    //   files: [
    //     'packages/*/tests/**/*.test.ts',
    //     'packages/*/tests/**/*.spec.ts',
    //     'packages/parser/tests/**/*.ts',
    //   ],
    //   env: {
    //     'jest/globals': true,
    //   },
    //   rules: {
    //     'eslint-plugin/no-identical-tests': 'error',
    //   },
    // },
  ],
};
