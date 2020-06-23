const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const chalk = require('chalk');
const { startCase } = require('lodash');
const helpers = require('./helpers');

const customElementJson = fs.readFileSync('./custom-elements.json');
const customElements = JSON.parse(customElementJson.toString()).tags;

const formatMarkdown = (md) => md.replace(/[\r\n]{3,}/g, '\n\n');

const compileDocs = (file) => {
  const folder = path.dirname(file);
  const component = path.basename(path.dirname(file));
  const components = fs
    .readdirSync(folder)
    .filter((file) => file.endsWith('.component.js'));
  const originalName = file.split('govukwc-')[1];
  const md = `# ${startCase(originalName)}

See: https://design-system.service.gov.uk/components/${originalName}

## Usage

**Js**

\`\`\`javascript
import 'govukwc-webcomponents/components/${component}.component.js';
\`\`\`

**Markup**

\`\`\`markup
<${component}></${component}>
\`\`\`\n\n

${components
  .reverse()
  .map((component) => {
    const name = path.basename(component, '.component.js');

    const customElement = customElements.find(
      (element) => element.name === name,
    );
    if (!customElement) {
      return;
    }
    return `## &lt;${name}&gt;

${helpers.propertiesTable(customElement.attributes)}

${helpers.slotsTable(customElement.slots)}

${helpers.eventsTable(customElement.events)}

`;
  })
  .join('\n')}`;
  fs.outputFileSync(`${folder}/README.md`, formatMarkdown(md));
  fs.outputFileSync(
    `${folder}/${component}.docs.js`,
    `// this file is auto-generated into using https://www.npmjs.com/package/web-component-analyzer
// source: ${file}
export const readme = \`${formatMarkdown(md).replace(/`/g, '\\`')}\`;\n`,
  );
  console.log(
    `[docs]: ${chalk.green('success')} ${component} README written to file`,
  );
};

const compileComponentReadMes = () => {
  const files = ['./**/*.component.js'];
  const filesWatcher = chokidar.watch(files, {
    persistent: false,
    ignored: ['node_modules/**/*'],
  });
  filesWatcher.on('add', (file) => compileDocs(file));
};

const updateAppReadMe = () => {
  const componentsdir = fs.readdirSync('./components');
  const components = componentsdir.filter((component) =>
    component.startsWith('govukwc'),
  );

  const siteReadme = fs.readFileSync('./README.md', { encoding: 'utf8' });
  const withoutComponents = siteReadme.split('## Components')[0];
  const md = `${withoutComponents}

## Components
${components
  .map(
    (component) =>
      `- [\<${component}>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/${component}/README.md)`,
  )
  .join('\n')}
  `;
  fs.writeFileSync('./README.md', formatMarkdown(md));
  console.log(
    `[docs]: ${chalk.green('success')} App README written to file updated`,
  );
};

compileComponentReadMes();
updateAppReadMe();
