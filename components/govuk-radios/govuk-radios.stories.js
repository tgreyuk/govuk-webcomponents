import { html } from 'lit-html';
import { readme } from './govuk-radios.docs';
import './govuk-radios.component';

export default {
  title: 'Radios',
  component: 'govuk-radios',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-radios
    legend="Have you changed your name?"
    hint="This includes changing your last name or spelling your name differently."
  >
    <govuk-radio
      id="changed-name"
      name="changed-name"
      label="Yes"
      value="yes"
    ></govuk-radio>
    <govuk-radio
      id="changed-name-2"
      name="changed-name"
      label="No"
      value="no"
    ></govuk-radio>
  </govuk-radios>`.getHTML();
