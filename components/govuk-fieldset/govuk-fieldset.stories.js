import { html } from 'lit-html';
import { readme } from './govuk-fieldset.docs';
import './govuk-fieldset.component';
import { Width20 } from '../govuk-text-input/govuk-text-input.stories';

export default {
  title: 'Fieldset',
  component: 'govuk-fieldset',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-fieldset legend="What is your address?">
    <govuk-text-input
      id="fieldset-1"
      name="fieldset-1"
      label="Building and street"
    ></govuk-text-input>
    <govuk-text-input
      id="fieldset-2"
      name="fieldset-2"
      label="Town or city"
      width="two-thirds"
    ></govuk-text-input>
  </govuk-fieldset>`.getHTML();
