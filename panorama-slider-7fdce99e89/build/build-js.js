const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const Terser = require('terser');
const banner = require('./banner');

const buildJs = async () => {
  const bundle = await rollup({
    input: path.resolve(__dirname, '../src/effect-panorama.esm.js'),
  });
  const bundleResult = await bundle.write({
    format: 'umd',
    name: 'EffectPanorama',
    strict: true,
    sourcemap: true,
    sourcemapFile: path.resolve(__dirname, '../dist/effect-panorama.js.map'),
    file: path.resolve(__dirname, '../dist/effect-panorama.js'),
    banner,
  });
  const result = bundleResult.output[0];
  const { code, map } = await Terser.minify(result.code, {
    sourceMap: {
      content: result.map,
      filename: `effect-panorama.min.js`,
      url: `effect-panorama.min.js.map`,
    },
    output: {
      preamble: banner,
    },
  }).catch((err) => {
    console.error(`Terser failed on file effect-panorama: ${err.toString()}`);
  });

  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-panorama.min.js`),
    code,
  );
  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-panorama.min.js.map`),
    map,
  );

  const file = path.resolve(__dirname, `../src/effect-panorama.esm.js`);
  const content = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(
    path.resolve(__dirname, '../dist/effect-panorama.esm.js'),
    `${banner}\n${content}`,
  );
};
module.exports = buildJs;
