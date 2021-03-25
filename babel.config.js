module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          // node: 'current',
          browsers: ['last 2 versions', 'ie >= 11'],
        },
        // modules: 'commonjs',
        modules: false, // to treeshaking
        useBuiltIns: 'usage',
        corejs: 3,
        shippedProposals: true,
      },
    ],
    '@babel/preset-react', // if you use react
    '@babel/preset-typescript',
  ],
  plugins: [],
};
