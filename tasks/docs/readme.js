const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const chalk = require('chalk');
const { startCase } = require('lodash');
const helpers = require('./helpers');

const customElementJson = fs.readFileSync('./custom-elements.json');
const customElements = JSON.parse(customElementJson.toString()).tags;

const compileDocs = (file) => {
  const folder = path.dirname(file);
  const component = path.basename(path.dirname(file));
  const components = fs
    .readdirSync(folder)
    .filter((file) => file.endsWith('.component.js'));
  const originalName = file.split('govuk-')[1];
  const md = `# ${startCase(originalName)}

See: https://design-system.service.gov.uk/components/${originalName}

## Usage

**Js**

\`\`\`javascript
import 'govuk-webcomponents/components/${component}.component.js';
\`\`\`

**Markup**

\`\`\`markup
<${component}></${component}>
\`\`\`\n\n

${components.reverse().map((component) => {
  const name = path.basename(component, '.component.js');

  const customElement = customElements.find((element) => element.name === name);
  return `## &lt;${name}&gt;

${helpers.propertiesTable(customElement.attributes)}

${helpers.slotsTable(customElement.slots)}

${helpers.eventsTable(customElement.events)}

`;
})}`;

  fs.outputFileSync(`${folder}/README.md`, md);
  fs.outputFileSync(
    `${folder}/${component}.docs.js`,
    `// this file is auto-generated into using https://www.npmjs.com/package/web-component-analyzer
// source: ${file}
export const readme = \`${md.replace(/`/g, '\\`')}\`;\n`,
  );
  console.log(
    `[docs]: ${chalk.green('success')} ${file} README written to file`,
  );
};

const compile = () => {
  const files = ['./**/*.component.js'];
  const filesWatcher = chokidar.watch(files, {
    persistent: false,
    ignored: ['node_modules/**/*'],
  });
  filesWatcher.on('add', (file) => compileDocs(file));
};

compile();
