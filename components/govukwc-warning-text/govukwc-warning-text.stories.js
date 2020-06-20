import { html } from 'lit-html';
import { readme } from './govukwc-warning-text.docs';
import './govukwc-warning-text.component';

export default {
  title: 'Warning Text',
  component: 'govukwc-warning-text',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-warning-text
    text="You can be fined up to £5,000 if you do not register."
  ></govukwc-warning-text>`.getHTML();
