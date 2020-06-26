import { html } from 'lit-html';
import { readme } from './govukwc-button.docs';
import './govukwc-button';

export default {
  title: 'Button',
  component: 'govukwc-button',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-button label="Save and continue"></govukwc-button>`.getHTML();

export const Start = () =>
  html`<govukwc-button
    url="https://www.gov.uk/"
    label="Start now"
    type="start"
  ></govukwc-button>`.getHTML();

export const Secondary = () =>
  html`<govukwc-button
    label="Find address"
    type="secondary"
  ></govukwc-button>`.getHTML();

export const Warning = () =>
  html`<govukwc-button
    label="Delete account"
    type="warning"
  ></govukwc-button>`.getHTML();

export const Disabled = () =>
  html`<govukwc-button
    label="Disabled button"
    disabled
  ></govukwc-button>`.getHTML();

export const PreventDoubleClick = () => {
  return html`<govukwc-button
    label="Confirm and send"
    preventDoubleClick="true"
  ></govukwc-button>`.getHTML();
};
