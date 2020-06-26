import { html } from 'lit-html';
import { readme } from './govukwc-radios.docs';
import './govukwc-radios';

export default {
  title: 'Radios',
  component: 'govukwc-radios',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-radios
    legend="Have you changed your name?"
    hint="This includes changing your last name or spelling your name differently."
  >
    <govukwc-radio
      id="changed-name"
      name="changed-name"
      label="Yes"
      value="yes"
    ></govukwc-radio>
    <govukwc-radio
      id="changed-name-2"
      name="changed-name"
      label="No"
      value="no"
    ></govukwc-radio>
  </govukwc-radios>`.getHTML();
