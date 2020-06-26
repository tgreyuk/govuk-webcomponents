# govuk-webcomponents

A set of encapsulated [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) consuming the [GOV.UK Design System](https://design-system.service.gov.uk/components/).

[![npm](https://img.shields.io/npm/v/govuk-webcomponents.svg)](https://www.npmjs.com/package/govuk-webcomponents)

Please note this package is not affiliated to GOV.UK but consumes code as distributed in the [govuk-frontend](https://www.npmjs.com/package/govuk-frontend) npm package (v3.7.0).

## Installation

```bash
npm install --save govuk-webcomponents
```

## Usage

The web components are distributed as ES modules and can be used with any platform.

### Modern browsers (Bare module specifiers)

To quickly try the components import the modules directly in the browser and serve with a process that supports bare module specifier resolution such as [es-dev-server](https://www.npmjs.com/package/es-dev-server).

```html
<body>
  <govukwc-button label="Save and continue"></govukwc-button>
  <script type="module">
    import 'govuk-webcomponents/components/govukwc-button/govukwc-button';
  </script>
</body>
```

### Browsers to IE11 (Compiling to ES5)

To support browsers (down to IE11) a combination of polyfills and build steps will need to be taken.

At a highlevel outline the following is required:

- Transpiling to ES5 will be required using build tools such as Webpack or Rollup.
- The [webcomponents.js](https://www.npmjs.com/package/@webcomponents/webcomponentsjs) pollyfills will need to be loaded.

## Components

Please visit the [Storybook](https://tgreyuk.github.io/govuk-webcomponents/storybook) site for demos and code examples.

- [\<govukwc-accordion>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-accordion/README.md)
- [\<govukwc-back-link>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-back-link/README.md)
- [\<govukwc-breadcrumbs>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-breadcrumbs/README.md)
- [\<govukwc-button>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-button/README.md)
- [\<govukwc-character-count>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-character-count/README.md)
- [\<govukwc-checkboxes>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-checkboxes/README.md)
- [\<govukwc-date-input>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-date-input/README.md)
- [\<govukwc-details>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-details/README.md)
- [\<govukwc-error-summary>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-error-summary/README.md)
- [\<govukwc-fieldset>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-fieldset/README.md)
- [\<govukwc-file-upload>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-file-upload/README.md)
- [\<govukwc-inset-text>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-inset-text/README.md)
- [\<govukwc-panel>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-panel/README.md)
- [\<govukwc-phase-banner>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-phase-banner/README.md)
- [\<govukwc-radios>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-radios/README.md)
- [\<govukwc-select>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-select/README.md)
- [\<govukwc-skip-link>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-skip-link/README.md)
- [\<govukwc-summary-list>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-summary-list/README.md)
- [\<govukwc-table>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-table/README.md)
- [\<govukwc-tabs>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-tabs/README.md)
- [\<govukwc-tag>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-tag/README.md)
- [\<govukwc-text-input>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-text-input/README.md)
- [\<govukwc-textarea>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-textarea/README.md)
- [\<govukwc-warning-text>](https://github.com/tgreyuk/govuk-webcomponents/blob/master/components/govukwc-warning-text/README.md)
