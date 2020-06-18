const path = require('path');
const fs = require('fs-extra');
const { camelCase } = require('lodash');
const globby = require('globby');
const chalk = require('chalk');

(async () => {
  const stories = await globby(['./components/**/*.stories.js'], {
    gitignore: true,
  });

  const components = stories.map((story) => {
    return {
      name: camelCase(path.dirname(story).split('govuk-')[1]),
      path: story,
    };
  });

  const html = `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      padding: 10px 30px;
    }
    h2 {background:#eee;padding:10px;margin:30px 0 20px 0;}
    </style>
  </head>
  <body>
    <div id="demo"></div>
    <script type="module">
      import { html, render } from 'lit-html';
      import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
      ${components
        .map(
          (component) =>
            `import * as ${component.name} from '${component.path}';`,
        )
        .join('\n')}
      const componentTemplate = (component) => html\`<h2>
          \${component.default.title}
        </h2>
        \${Object.entries(component)
          .filter(([a, b]) => a !== 'default')
          .map(([a, b]) => unsafeHTML(\`<div>\${b()}</div>\`))} \`;
      const template = () => {
        return html\`

          ${components
            .map((component) => ` \${componentTemplate(${component.name})}`)
            .join('\n')}
        \`;
      };
      render(template(), document.querySelector('#demo'));
    </script>
  </body>
</html>`;

  fs.outputFileSync(`./index.html`, html);

  console.log(`[playground] ${chalk.green('success')} playground written`);
})();
