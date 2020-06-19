const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const { drop, dropRight } = require('lodash');

const splitlines = (string) => {
  const parts = string.split(/(\r?\n)/);
  const lines = [];
  for (let i = 0; i < parts.length; i += 2) {
    lines.push(parts[i] + (parts[i + 1] || ''));
  }
  return lines;
};

// accordion
const basedir = path.resolve(
  __dirname,
  '..',
  '..',
  'node_modules',
  'govuk-frontend',
  'govuk',
  'components',
);

const compileScript = (component, options) => {
  const file = `${basedir}/${component}/${component}.js`;
  const script = fs.readFileSync(file);
  const scriptToLines = splitlines(script.toString());
  let parsedScript = dropRight(scriptToLines, options.dropRight);
  parsedScript = drop(parsedScript, options.dropLeft);
  const outfile = path.resolve(
    __dirname,
    '..',
    '..',
    'components',
    `govuk-${component}`,
    `govuk-${component}.script.js`,
  );
  fs.outputFileSync(
    outfile,
    `// this file is auto-generated into required format
// source: node_modules/govuk-frontend/govuk/${file}
function nodeListForEach (nodes, callback) {
  return nodes.forEach(callback);
}
${parsedScript.join('').replace('function', 'export function')}\n`,
  );
  console.log(
    `[scripts]: ${chalk.green(
      'success',
    )} ${component} component styles written`,
  );
};

compileScript('accordion', { dropRight: 5, dropLeft: 760 });
compileScript('button', { dropRight: 5, dropLeft: 661 });
