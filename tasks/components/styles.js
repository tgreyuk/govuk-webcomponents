const path = require('path');
const fs = require('fs-extra');
const sass = require('sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const chokidar = require('chokidar');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
require('cssnano');

const includePaths = [path.resolve(__dirname, '..', '..', 'node_modules')];

const compileFile = (file) => {
  const basename = path.basename(file, '.scss');
  const outfile = path.dirname(file) + '/' + basename + '.js';
  const code = fs.readFileSync(file);
  const result = sass.renderSync({
    data: `
    $govuk-font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    @import 'govuk-frontend/govuk/settings/all';
    @import 'govuk-frontend/govuk/tools/all';
    @import 'govuk-frontend/govuk/helpers/all';
    ${code.toString()}`,
    includePaths: includePaths,
  });

  postcss([
    autoprefixer,
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ])
    .process(result.css.toString(), { from: false })
    .then((result) => {
      const template = `// this file is auto-generated for LitElement consumption
// source: node_modules/govuk-frontend/govuk/${file}
import {css} from 'lit-element';\nexport default css\`${result.css
        .toString()
        .replace(/\!-width/g, '\\!-width')}\`\n`;
      fs.outputFileSync(outfile, template);
      console.log(`[styles]: ${chalk.green('success')} ${basename}.js written`);
    });
};

const compile = (watch = false) => {
  const componentStyles = ['./**/*.scss'];
  const componentStylesWatcher = chokidar.watch(componentStyles, {
    persistent: watch,
    ignored: ['node_modules/**/*'],
  });
  if (!watch) {
    componentStylesWatcher.on('add', (path) => compileFile(path));
  }
  componentStylesWatcher.on('change', (path) => compileFile(path));
};

compile(argv.watch);
