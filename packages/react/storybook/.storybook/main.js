const path = require('path');

const resolve = (dir) => path.resolve(__dirname, `../../${dir}`);

module.exports = {
  stories: [resolve(`ui/**/*.stories.@(js|jsx|ts|tsx|mdx)`)],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config) => {
    return config;
  },
};
