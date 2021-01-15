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
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'jest'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  settings: {},
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
     * import
     */
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
      },
    ],
    'import/exports-last': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': ['error'],
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'error',
    'import/no-internal-modules': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        // devDependencies: ["*.js", "src/**/*.test.js"],
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],
  },
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
