import { html } from 'lit-html';
import { readme } from './govuk-warning-text.docs';
import './govuk-warning-text.component';

export default {
  title: 'Warning Text',
  component: 'govuk-warning-text',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-warning-text
    text="You can be fined up to £5,000 if you do not register."
  ></govuk-warning-text>`.getHTML();
