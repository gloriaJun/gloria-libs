module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    // '@storybook/addon-actions',
    // '@storybook/addon-viewport/register',
    // '@storybook/addon-knobs/register',
    // '@storybook/addon-docs/preset',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties'),

              // To generate props
              require.resolve('babel-plugin-react-docgen'),
            ],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    /*
     * custom configuration
     */

    return config;
  },
};
