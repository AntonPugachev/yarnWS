import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const getPaths = (pathNames: string[]) => {
  return pathNames.reduce((acc, pathName) => {
    acc.push(path.resolve(path.resolve(`@monorepo/${pathName}/package.json`), '..'));
    return acc;
  }, [] as string[]);
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: getPaths(['shared-components']),
      },
    },
  },
});
