module.exports = {
  root: true,
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
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  // ignorePatterns: ['node_modules', '*.config.js', 'build', 'dist'],
  rules: {
    // defined the common lint rules
    /**
     * basic rules
     */
    // https://eslint.org/docs/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': ['error'],

    /**
     * typescript
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-use-before-define': 'warn',

    /**
     * react
     */

    /**
     * import
     */
    // 'import/no-extraneous-dependencies': ['error'],
    // 'import/no-self-import': 'error',
    // 'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    // 'import/prefer-default-export': 'off'
  },
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
