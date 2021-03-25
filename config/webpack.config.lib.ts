import { resolvePath } from './utils';
import { webpackBaseConfig } from './webpack.config.base';

export default webpackBaseConfig({
  mode: 'production',
  entry: resolvePath('./src/index.ts'),
  output: {
    path: resolvePath('dist'),
    filename: 'index.js',
    // // 라이브러리 객체 이름
    // library: 'skydown',
    // // 라이브러리 설정 방법
    // libraryTarget: 'umd',
    // // 라이브러리 내보내기 설정
    // libraryExport: 'default',
  },
});
