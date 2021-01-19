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
    project: ['./tsconfig.json', './packages/**/tsconfig.json'],
    sourceType: 'module',
    // tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest'],
  extends: [
    'gloria-base',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    // 'prettier/react',
    'plugin:jest/recommended',
  ],
  settings: {},
  rules: {},
  ignorePatterns: ['node_modules', '*.config.js', '.*rc.js', 'dist'],
  overrides: [
    {
      files: ['./packages/react/**/*.tsx'],
      plugins: ['react', 'react-hooks'],
      extends: ['plugin:react/recommended'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {},
    },
  ],
  ignorePatterns: [
    'node_modules',
    '*.config.js',
    '.*rc.js',
    '*.stories.tsx',
    // '*.stories.(js|jsx|ts|tsx)',
    'coverage',
    'dist',
  ],
};
