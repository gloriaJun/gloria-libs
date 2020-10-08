module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['node_modules', '*.config.js', 'build', 'dist'],
  // ignorePatterns: ['node_modules', '*.config.js', 'build', 'dist', '.*.js'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-use-before-define': 'warn',
    // 'import/no-extraneous-dependencies': ['error'],
    // 'import/no-self-import': 'error',
    // 'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    // 'import/prefer-default-export': 'off',
  },
};
