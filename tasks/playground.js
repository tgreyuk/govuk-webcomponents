const path = require('path');
const fs = require('fs-extra');
const { camelCase, startCase, sortBy } = require('lodash');
const globby = require('globby');
const chalk = require('chalk');

(async () => {
  const stories = await globby(['./components/**/*.stories.js'], {
    gitignore: true,
  });

  const components = sortBy(
    stories.map((story) => {
      return {
        el: path.basename(path.dirname(story)),
        name: camelCase(path.dirname(story).split('govukwc-')[1]),
        path: story,
      };
    }),
    'el',
  );

  const indexHtml = `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <title>Playground</title>
    <meta charset="utf-8" />
    <style>
    body {
      padding: 30px 60px;
      font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    h1.playground-title {
      text-align: center;
      font-weight: 500;
      margin-bottom:40px;
    }
    ul.playground-menu {
      margin:0;
      padding:0;
      column-count: 4;
    }
    ul.playground-menu li {
      margin:0 0 10px 20px;

    }

    @media only screen and (max-width: 700px) {
      body {
        padding:10px;
      }
      ul.playground-menu {
        column-count: 2;
      }

    }
    </style>
  </head>
  <body>
    <div id="demo"></div>
    <script type="module">
      import { html, render } from 'lit-html';
      const template = () => {
        return html\`
          <h1 class="playground-title">Components</h1>
          <ul class="playground-menu">
          ${components
            .map(
              (component) =>
                `<li><a href="${component.el}.html">${startCase(
                  component.name,
                )}</a></li>`,
            )
            .join('\n')}
          </ul>
        \`;
      };
      render(template(), document.querySelector('#demo'));

    </script>
  </body>
</html>`;

  fs.outputFileSync(`./playground/index.html`, indexHtml);

  const componentHtml = (component) => `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <title>Playground</title>
    <meta charset="utf-8" />
    <style>
    body {
      font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
      padding: 30px 60px;
    }

    .story {
      margin-bottom:10px;
    }
    @media only screen and (max-width: 700px) {
      body {
        padding:10px;
      }
    }
    </style>
  </head>
  <body>
    <div id="demo"></div>
    <script type="module">
      import { html, render } from 'lit-html';
      import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
      import { storyEvents } from '../.storybook/utils.js';
      import * as ${component.name} from '../components/${component.el}/${
    component.el
  }.stories.js';
      import { readme } from '../components/${component.el}/${
    component.el
  }.docs.js';
      import marked from 'marked/lib/marked.esm';

      const componentTemplate = (component) => html\`
      \${Object.entries(component)
          .filter(([a, b]) => a !== 'default')
          .map(([a, b]) => unsafeHTML(\`<div class="story">\${b()}</div>\`))} \`;
      const template = () => {
        return html\`
          <h1>${startCase(component.name)}</h1>
          \${componentTemplate(${
            component.name
          })}\${unsafeHTML(marked(readme))}\`
        };
      render(template(), document.querySelector('#demo'));

      storyEvents('${component.name}', (e) => {
        console.log(e);
      });

    </script>
  </body>
</html>`;
  components.forEach((component) => {
    fs.outputFileSync(
      `./playground/${component.el}.html`,
      componentHtml(component),
    );
  });

  console.log(`[playground] ${chalk.green('success')} playground written`);
})();
