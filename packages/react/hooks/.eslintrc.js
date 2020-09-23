const config = require('../../config-shared/.eslintrc.base.js');

module.exports = {
  ...config,
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'prettier/react'],
  rules: {
    // 'react/destructuring-assignment': 'off',
    // 'react/jsx-props-no-spreading': 'warn',
    // 'react/prop-types': 'off',
  },
};
