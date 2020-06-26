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
      url="javascript:void(0)"
    ></govukwc-breadcrumbs-item>
    <govukwc-breadcrumbs-item
      label="Passports"
      url="javascript:void(0)"
    ></govukwc-breadcrumbs-item>
    <govukwc-breadcrumbs-item
      label="Travel abroad"
      url="javascript:void(0)"
    ></govukwc-breadcrumbs-item>
  </govukwc-breadcrumbs>`.getHTML();
