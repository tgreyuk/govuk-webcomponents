import { html } from 'lit-html';
import { readme } from './govukwc-date-input.docs';
import './govukwc-date-input';

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
