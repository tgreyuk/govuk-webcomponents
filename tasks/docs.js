const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const { startCase } = require('lodash');
const {
  analyzeText,
  transformAnalyzerResult,
} = require('web-component-analyzer');

const compileDocs = (file) => {
  const folder = path.dirname(file);
  const component = path.basename(path.dirname(file));
  const components = fs
    .readdirSync(folder)
    .filter((file) => file.includes('.component.'));
  const analyzeData = components.map((componentFile) => {
    const text = fs.readFileSync(folder + '/' + componentFile);
    return {
      fileName: componentFile,
      text: text.toString(),
    };
  });
  const { results, program } = analyzeText(analyzeData);
  const componentId = file.split('govuk-')[1];
  const md = [
    `# ${startCase(componentId)}

See: https://design-system.service.gov.uk/components/${componentId}

## Usage

**Js**

\`\`\`javascript
import 'govuk-webcomponents/components/${component}.component.js';
\`\`\`


**Markup**

\`\`\`markup
<${component}></${component}>
\`\`\`\n\n`,
    ...results.map((result) =>
      transformAnalyzerResult('markdown', result, program)
        .replace(/## /g, '### ')
        .replace(/^# /g, '## '),
    ),
  ];
  fs.outputFileSync(`${folder}/README.md`, md.join('\n'));
  fs.outputFileSync(
    `${folder}/${component}.docs.js`,
    `// this file is auto-generated into using https://www.npmjs.com/package/web-component-analyzer
// source: ${file}
export const readme = \`${md
      .map((m) => m.replace(/`/g, '\\`'))
      .join('\n')}\`;\n`,
  );
  console.log(
    `[docs]: ${chalk.green('success')} ${file} README written to file`,
  );
};

const compile = (watch = false) => {
  const files = ['./**/*.component.js'];
  const filesWatcher = chokidar.watch(files, {
    persistent: watch,
    ignored: ['node_modules/**/*', 'components/govuk-base/**/*'],
  });
  if (!watch) {
    filesWatcher.on('add', (file) => compileDocs(file));
  }
  filesWatcher.on('change', (file) => compileDocs(file));
};
compile(argv.watch);
