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

const depFunctions = {
  nodeListForEach: `function nodeListForEach (nodes, callback) {
    return nodes.forEach(callback);
  }`,
};

const compileScript = (component, options) => {
  const file = `${basedir}/${component}/${component}.js`;
  const script = fs.readFileSync(file);
  const scriptToLines = splitlines(script.toString());
  let parsedScript = dropRight(scriptToLines, 5);
  parsedScript = drop(parsedScript, options.dropLeft);
  const outfile = path.resolve(
    __dirname,
    '..',
    '..',
    'components',
    `govukwc-${component}`,
    `govukwc-${component}.script.js`,
  );
  fs.outputFileSync(
    outfile,
    `// this file is auto-generated into required format
// source: node_modules/govuk-frontend/govuk/${file}
${
  options.functions
    ? `${options.functions.map((fn) => depFunctions[fn]).join('\n')}`
    : ``
}
${parsedScript.join('').replace('function', 'export function')}\n`,
  );
  console.log(
    `[scripts]: ${chalk.green(
      'success',
    )} ${component} component styles written`,
  );
};

compileScript('accordion', {
  dropLeft: 760,
  functions: ['nodeListForEach'],
});
compileScript('button', { dropLeft: 661 });
compileScript('character-count', { dropLeft: 1016 });
compileScript('error-summary', { dropLeft: 708 });
compileScript('tabs', {
  dropLeft: 1070,
  functions: ['nodeListForEach'],
});
