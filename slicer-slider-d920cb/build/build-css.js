const path = require('path');
const fs = require('fs');
const sass = require('sass');
const CleanCSS = require('clean-css');
const banner = require('./banner');

const buildCss = async () => {
  const src = path.resolve(__dirname, '../src/effect-slicer.scss');
  const scss = fs.readFileSync(src, 'utf-8');

  const result = sass.compileString(
    scss
      .split('\n')
      .filter((l) => !l.includes('@import'))
      .join('\n'),
  );
  fs.writeFileSync(
    path.resolve(__dirname, '../dist/effect-slicer.css'),
    `${banner}\n${result.css}`,
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../dist/effect-slicer.scss'),
    `${banner}\n${scss}`,
  );

  const minified = new CleanCSS({
    compatibility: '*,-properties.zeroUnits',
  }).minify(result.css);

  fs.writeFileSync(
    path.resolve(__dirname, '../dist/effect-slicer.min.css'),
    minified.styles,
  );
};
module.exports = buildCss;
