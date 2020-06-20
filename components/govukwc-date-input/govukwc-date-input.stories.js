import './govukwc-date-input.component';
import { readme } from './govukwc-date-input.docs';
import { html } from 'lit-html';

export default {
  title: 'Date Input',
  component: 'govukwc-date-input',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const basic = () =>
  html`<govukwc-date-input></govukwc-date-input>`.getHTML();
