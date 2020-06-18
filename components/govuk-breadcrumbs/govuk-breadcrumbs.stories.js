import { html } from 'lit-html';
import { readme } from './govuk-breadcrumbs.docs.js';
import './govuk-breadcrumbs.component.js';

export default {
  title: 'Breadcrumbs',
  component: 'govuk-breadcrumbs',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-breadcrumbs>
    <govuk-breadcrumbs-item
      label="Home"
      url="javascript:void(0)"
    ></govuk-breadcrumbs-item>
    <govuk-breadcrumbs-item
      label="Passports"
      url="javascript:void(0)"
    ></govuk-breadcrumbs-item>
    <govuk-breadcrumbs-item
      label="Travel abroad"
      url="javascript:void(0)"
    ></govuk-breadcrumbs-item>
  </govuk-breadcrumbs>`.getHTML();
