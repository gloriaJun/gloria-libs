import { merge } from 'webpack-merge';

// import { resolvePath } from './utils';
import webpackProdConfig from './webpack.config.prod';

export default merge(webpackProdConfig, {
  mode: 'development',
});
