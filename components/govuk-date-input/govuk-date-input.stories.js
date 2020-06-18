import './govuk-date-input.component';
import { readme } from './govuk-date-input.docs';
import { html } from 'lit-html';

export default {
  title: 'Date Input',
  component: 'govuk-date-input',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const basic = () =>
  html`<govuk-date-input></govuk-date-input>`.getHTML();
