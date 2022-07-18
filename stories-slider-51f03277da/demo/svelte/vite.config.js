import svelte from 'rollup-plugin-svelte';
import path from 'path';

export default {
  plugins: [svelte()],
  root: './src',
  base: '',
  publicDir: path.resolve(__dirname, '../../public'),
  build: {
    outDir: path.resolve(__dirname, '../../www/svelte'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
};
