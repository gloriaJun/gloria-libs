module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './packages/react/**/tsconfig.json',
      './packages/**/tsconfig.json',
    ],
    sourceType: 'module',
    ecmaFeatures: {
      // jsx: true,
    },
  },
  plugins: [],
  extends: ['gloria-base'],
  settings: {},
  rules: {},
  overrides: [
    {
      files: ['./packages/react/**/*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['react', 'react-hooks'],
      extends: ['plugin:react/recommended', 'prettier/react'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {},
    },
    /** test files */
    {
      files: ['./packages/**/*.spec.tsx'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      settings: {},
      rules: {},
    },
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    'coverage',
    '*.config.js',
    '.*rc.js',
    '*.stories.*',
  ],
};
