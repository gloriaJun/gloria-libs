import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
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
      plugins: [
        //TODO waiting on https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
        //@ts-ignore
        new TsconfigPathsPlugin({
          configFile: path.resolve('./tsconfig.json'),
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
              },
            },
          ],
        },
      ],
    },

    plugins: [new CleanWebpackPlugin()],
    optimization: {
      minimize: true,
      splitChunks: {},
      concatenateModules: true,
    },
  };
};
