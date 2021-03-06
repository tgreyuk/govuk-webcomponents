const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const chalk = require('chalk');
const helpers = require('./helpers');

const customElementJson = fs.readFileSync('./custom-elements.json');
const customElements = JSON.parse(customElementJson.toString()).tags;

const formatMarkdown = (md) => md.replace(/[\r\n]{3,}/g, '\n\n');

const compileDocs = (file) => {
  const folder = path.dirname(file);
  const component = path.basename(path.dirname(file));

  const components = fs
    .readdirSync(folder)
    .filter(
      (file) =>
        file.endsWith('.js') &&
        !file.endsWith('.docs.js') &&
        !file.endsWith('.script.js') &&
        !file.endsWith('.stories.js') &&
        !file.endsWith('.styles.js') &&
        !file.endsWith('.test.js'),
    );

  const originalName = file.split('govukwc-')[1];
  const md = `# govukwc-${originalName.replace('/', '')}

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/${originalName})
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/${originalName})

## Usage

\`\`\`javascript
import 'govukwc-webcomponents/components/${component}/${component}';
\`\`\`

## API

${components
  .reverse()
  .map((component) => {
    const name = path.basename(component, '.js');

    const customElement = customElements.find(
      (element) => element.name === name,
    );
    if (!customElement) {
      return;
    }
    return `## \`<${name}>\`

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
  const files = ['./components/**/*.js'];
  const filesWatcher = chokidar.watch(files, {
    persistent: false,
    ignored: [
      'node_modules/**/*',
      '**/*.docs.js',
      '**/*.script.js',
      '**/*.stories.js',
      '**/*.styles.js',
      '**/*.test.js',
    ],
  });

  filesWatcher.on('add', (file) => compileDocs(file));
  filesWatcher.on('change', (file) => compileDocs(file));
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

Please visit the [Storybook](https://tgreyuk.github.io/govuk-webcomponents/storybook) site for demos and code examples.

${components
  .map(
    (component) =>
      `- [\\<${component}>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/${component}/README.md)`,
  )
  .join('\n')}
  `;
  fs.writeFileSync('./README.md', formatMarkdown(md));
  console.log(
    `[docs]: ${chalk.green('success')} App README written to file updated`,
  );
};

compileComponentReadMes();
//updateAppReadMe();
