import { resolvePath } from './utils';
import { webpackBaseConfig } from './webpack.config.base';

export default webpackBaseConfig({
  mode: 'production',
  entry: resolvePath('./src/index.ts'),
  output: {
    path: resolvePath('dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
});
