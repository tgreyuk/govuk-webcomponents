const path = require('path');
const fs = require('fs-extra');
const { camelCase, startCase } = require('lodash');
const globby = require('globby');
const chalk = require('chalk');

(async () => {
  const stories = await globby(['./components/**/*.stories.js'], {
    gitignore: true,
  });

  const components = stories.map((story) => {
    return {
      el: path.basename(path.dirname(story)),
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
      padding: 10px 30px 30px 10px;
    }
    h1 {
      text-align: center;
      font-weight: 500;
      margin-bottom:40px;
    }
    h2 {
      background: #eee;
      padding: 10px;
      margin: 30px 0 20px 0;
      font-weight: 500;
    }
    ul {
      margin:0;
      padding:0;
      column-count: 4;
    }
    li {
      margin:0 0 10px 20px;

    }

    @media only screen and (max-width: 700px) {
      body {
        padding:10px;
      }
      ul {
        column-count: 2;
      }

    }
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
      const componentTemplate = (component) => html\`
      <h2 id=\${component.default.component}>\${component.default.title}</h2>
      \${Object.entries(component)
          .filter(([a, b]) => a !== 'default')
          .map(([a, b]) => unsafeHTML(\`<div class="story">\${b()}</div>\`))} \`;
      const template = () => {
        return html\`
          <h1>Components</h1>
          <ul>
          ${components
            .map(
              (component) =>
                `<li><a href="#${component.el}">${startCase(
                  component.name,
                )}</a></li>`,
            )
            .join('\n')}
          </ul>
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
