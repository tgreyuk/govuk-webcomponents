import { html } from 'lit-html';
import { readme } from './govuk-button.docs';
import './govuk-button.component';

export default {
  title: 'Button',
  component: 'govuk-button',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-button label="Save and continue"></govuk-button>`.getHTML();

export const Start = () =>
  html`<govuk-button
    url="javascript:void(0)"
    label="Start now"
    type="start"
  ></govuk-button>`.getHTML();

export const Secondary = () =>
  html`<govuk-button
    label="Find address"
    type="secondary"
  ></govuk-button>`.getHTML();

export const Warning = () =>
  html`<govuk-button
    label="Delete account"
    type="warning"
  ></govuk-button>`.getHTML();

export const Disabled = () =>
  html`<govuk-button
    label="Disabled button"
    disabled
  ></govuk-button>`.getHTML();

export const PreventDoubleClick = () => {
  return html`<govuk-button
    label="Confirm and send"
    preventDoubleClick="true"
  ></govuk-button>`.getHTML();
};
