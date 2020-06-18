import { html } from 'lit-html';
import { readme } from './govuk-back-link.docs';
import './govuk-back-link.component';

export default {
  title: 'Back Link',
  component: 'govuk-back-link',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-back-link
    label="Back"
    url="javascript:void(0)"
  ></govuk-back-link>`.getHTML();
