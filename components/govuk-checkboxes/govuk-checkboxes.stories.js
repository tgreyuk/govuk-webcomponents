import { html } from 'lit-html';
import { readme } from './govuk-checkboxes.docs';
import './govuk-checkboxes.component';

export default {
  title: 'Checkboxes',
  component: 'govuk-checkboxes',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-checkboxes
    legend="Which types of waste do you transport?"
    hint="Select all that apply."
  >
    <govuk-checkbox
      id="waste"
      name="waste"
      label="Waste from animal carcasses"
      value="carcasses"
    ></govuk-checkbox>
    <govuk-checkbox
      id="waste-2"
      name="waste"
      label="Waste from mines or quarries"
      value="mines"
    ></govuk-checkbox>
    <govuk-checkbox
      id="waste-3"
      name="waste"
      label="Farm or agricultural waste"
      value="farm"
    ></govuk-checkbox>
  </govuk-checkboxes>`.getHTML();
