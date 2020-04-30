// import path from 'path';
// import alias from 'rollup-plugin-alias';
// import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'index.js',
  plugins: [
    builtins()
    /* alias({
      constants: path.resolve('./src/constants'),
      helpers: path.resolve('./src/helpers'),
      languages: path.resolve('./src/languages')
    }),
    resolve() */
  ],
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'numbersToWords'
  }
};
