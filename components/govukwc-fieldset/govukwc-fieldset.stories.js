import { html } from 'lit-html';
import { readme } from './govukwc-fieldset.docs';
import './govukwc-fieldset.component';

export default {
  title: 'Fieldset',
  component: 'govukwc-fieldset',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-fieldset legend="What is your address?">
    <govukwc-text-input
      id="fieldset-1"
      name="fieldset-1"
      label="Building and street"
    ></govukwc-text-input>
    <govukwc-text-input
      id="fieldset-2"
      name="fieldset-2"
      label="Town or city"
      width="two-thirds"
    ></govukwc-text-input>
  </govukwc-fieldset>`.getHTML();
