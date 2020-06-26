import { html } from 'lit-html';
import { readme } from './govukwc-checkboxes.docs';
import './govukwc-checkboxes';

export default {
  title: 'Checkboxes',
  component: 'govukwc-checkboxes',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-checkboxes
    legend="Which types of waste do you transport?"
    hint="Select all that apply."
  >
    <govukwc-checkbox
      id="waste"
      name="waste"
      label="Waste from animal carcasses"
      value="carcasses"
    ></govukwc-checkbox>
    <govukwc-checkbox
      id="waste-2"
      name="waste"
      label="Waste from mines or quarries"
      value="mines"
    ></govukwc-checkbox>
    <govukwc-checkbox
      id="waste-3"
      name="waste"
      label="Farm or agricultural waste"
      value="farm"
    ></govukwc-checkbox>
  </govukwc-checkboxes>`.getHTML();
