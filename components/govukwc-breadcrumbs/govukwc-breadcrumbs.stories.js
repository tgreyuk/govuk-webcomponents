import { html } from 'lit-html';
import { readme } from './govukwc-breadcrumbs.docs';
import './govukwc-breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: 'govukwc-breadcrumbs',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-breadcrumbs>
    <govukwc-breadcrumbs-item
      label="Home"
      url="https://www.gov.uk/"
    ></govukwc-breadcrumbs-item>
    <govukwc-breadcrumbs-item
      label="Passports"
      url="https://www.gov.uk/"
    ></govukwc-breadcrumbs-item>
    <govukwc-breadcrumbs-item
      label="Travel abroad"
      url="https://www.gov.uk/"
    ></govukwc-breadcrumbs-item>
  </govukwc-breadcrumbs>`.getHTML();
