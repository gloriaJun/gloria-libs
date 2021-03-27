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
  },
  plugins: [],
  extends: ['gloria-base'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
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
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
    {
      files: ['./packages/utility/**/*.ts'],
      rules: {
        'import/no-internal-modules': ['off'],
      },
    },
    /** test files */
    {
      files: [
        './packages/**/*.test.tsx',
        './packages/**/*.test.ts',
        './packages/**/*.spec.ts',
      ],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      settings: {},
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    /** story files */
    {
      files: ['./packages/react/**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { packageDir: [`./`, `./packages/react/ui`] },
        ],
        'import/no-internal-modules': [
          'error',
          {
            allow: ['@storybook/**'],
          },
        ],
        'import/exports-last': 'off',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              ['sibling', 'index'],
            ],
            pathGroups: [
              {
                pattern: '@storybook/**',
                group: 'external',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['@storybook/**'],
            'newlines-between': 'always',
            alphabetize: {
              caseInsensitive: true,
              order: 'asc',
            },
          },
        ],
      },
    },
  ],
};
