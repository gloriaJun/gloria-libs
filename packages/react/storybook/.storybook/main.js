const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const resolve = (dir) => path.resolve(process.cwd(), `..`, dir);

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
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
