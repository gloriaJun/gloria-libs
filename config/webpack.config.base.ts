import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import * as webpack from 'webpack';

export interface IWebpackLibConfig {
  mode: 'development' | 'production';
  entry: string | Record<string, string | string[]>;
  output: Record<string, string | string[]>;
}

export const webpackBaseConfig = (
  options: IWebpackLibConfig,
): webpack.Configuration => {
  const { mode, entry, output } = options;

  return {
    mode,
    devtool: 'inline-source-map',
    entry,
    output,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new TsconfigPathsPlugin(),
    ],
    optimization: {
      minimize: true,
      splitChunks: {},
      concatenateModules: true,
    },
  };
};
