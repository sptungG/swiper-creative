const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const Terser = require('terser');
const banner = require('./banner');

const buildJs = async () => {
  const bundle = await rollup({
    input: path.resolve(__dirname, '../src/effect-slicer.esm.js'),
  });
  const bundleResult = await bundle.write({
    format: 'umd',
    name: 'EffectSlicer',
    strict: true,
    sourcemap: true,
    sourcemapFile: path.resolve(__dirname, '../dist/effect-slicer.js.map'),
    file: path.resolve(__dirname, '../dist/effect-slicer.js'),
    banner,
  });
  const result = bundleResult.output[0];
  const { code, map } = await Terser.minify(result.code, {
    sourceMap: {
      content: result.map,
      filename: `effect-slicer.min.js`,
      url: `effect-slicer.min.js.map`,
    },
    output: {
      preamble: banner,
    },
  }).catch((err) => {
    console.error(`Terser failed on file effect-slicer: ${err.toString()}`);
  });

  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-slicer.min.js`),
    code,
  );
  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-slicer.min.js.map`),
    map,
  );

  const file = path.resolve(__dirname, `../src/effect-slicer.esm.js`);
  const content = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(
    path.resolve(__dirname, '../dist/effect-slicer.esm.js'),
    `${banner}\n${content}`,
  );
};
module.exports = buildJs;
