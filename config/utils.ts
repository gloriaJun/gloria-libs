import * as path from 'path';

console.log('===> process.cwd()', process.cwd());

export const resolvePath = (...dirs: string[]) => {
  return path.resolve(process.cwd(), ...dirs);
};
