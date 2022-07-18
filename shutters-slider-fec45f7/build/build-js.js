const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const Terser = require('terser');
const replace = require('@rollup/plugin-replace');
const banner = require('./banner');

const buildJs = async () => {
  const bundle = await rollup({
    input: path.resolve(__dirname, '../src/effect-shutters.esm.js'),
  });
  const bundleResult = await bundle.write({
    format: 'umd',
    name: 'EffectShutters',
    strict: true,
    sourcemap: true,
    sourcemapFile: path.resolve(__dirname, '../dist/effect-shutters.js.map'),
    file: path.resolve(__dirname, '../dist/effect-shutters.js'),
    banner,
  });
  const result = bundleResult.output[0];
  const { code, map } = await Terser.minify(result.code, {
    sourceMap: {
      content: result.map,
      filename: `effect-shutters.min.js`,
      url: `effect-shutters.min.js.map`,
    },
    output: {
      preamble: banner,
    },
  }).catch((err) => {
    console.error(`Terser failed on file effect-shutters: ${err.toString()}`);
  });

  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-shutters.min.js`),
    code,
  );
  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-shutters.min.js.map`),
    map,
  );

  const file = path.resolve(__dirname, `../src/effect-shutters.esm.js`);
  const content = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(
    path.resolve(__dirname, '../dist/effect-shutters.esm.js'),
    `${banner}\n${content}`,
  );
};
module.exports = buildJs;
