import { html } from 'lit-html';
import { readme } from './govukwc-error-summary.docs';
import './govukwc-error-summary.component';

export default {
  title: 'Error summary',
  component: 'govukwc-error-summary',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-error-summary>
      <govukwc-error-summary-item
        target="name"
        message="Enter your full name"
      ></govukwc-error-summary-item>
    </govukwc-error-summary>

    <govukwc-text-input
      id="name"
      name="name"
      label="Full name"
      width="10"
      invalid
      error="Enter your full name"
    ></govukwc-text-input> `.getHTML();
