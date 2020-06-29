import { html } from 'lit-html';
import { readme } from './govukwc-text-input.docs';
import './govukwc-text-input';

export default {
  title: 'Text Input',
  component: 'govukwc-text-input',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-text-input
    pageHeadingLabel
    id="event-name"
    name="event-name"
    label="What is the name of the event?"
    hint="The name you’ll use on promotional material."
  ></govukwc-text-input>`.getHTML();

export const Number = () =>
  html`<govukwc-text-input
    pageHeadingLabel
    number
    id="account-number"
    name="account-number"
    label="What is your account number?"
    hint="Must be between 6 and 8 digits long"
  ></govukwc-text-input>`.getHTML();

export const Width20 = () =>
  html`<govukwc-text-input
    id="width-20"
    name="width-20"
    label="20 character width"
  ></govukwc-text-input>`.getHTML();

export const Width10 = () =>
  html`<govukwc-text-input
    id="width-10"
    name="width-10"
    label="10 character width"
    width="10"
  ></govukwc-text-input>`.getHTML();

export const Width05 = () =>
  html`<govukwc-text-input
    id="width-5"
    name="width-5"
    label="5 character width"
    width="5"
  ></govukwc-text-input>`.getHTML();

export const Width04 = () =>
  html`<govukwc-text-input
    id="width-4"
    name="width-4"
    label="4 character width"
    width="4"
  ></govukwc-text-input>`.getHTML();

export const Width03 = () =>
  html`<govukwc-text-input
    id="width-3"
    name="width-3"
    label="3 character width"
    width="3"
  ></govukwc-text-input>`.getHTML();

export const Width02 = () =>
  html`<govukwc-text-input
    id="width-2"
    name="width-2"
    label="2 character width"
    width="2"
  ></govukwc-text-input>`.getHTML();

export const WidthFull = () =>
  html`<govukwc-text-input
    id="full"
    name="full"
    label="Full width"
    width="full"
  ></govukwc-text-input>`.getHTML();

export const WidthThreeQuarters = () =>
  html`<govukwc-text-input
    id="three-quarters"
    name="three-quarters"
    label="Three-quarters width"
    width="three-quarters"
  ></govukwc-text-input>`.getHTML();

export const WidthTwoThirds = () =>
  html`<govukwc-text-input
    id="two-thirds"
    name="two-thirds"
    label="Two-thirds width"
    width="two-thirds"
  ></govukwc-text-input>`.getHTML();

export const WidthOneHalf = () =>
  html`<govukwc-text-input
    id="one-half"
    name="one-half"
    label="One-half width"
    width="one-half"
  ></govukwc-text-input>`.getHTML();

export const WidthOneThird = () =>
  html`<govukwc-text-input
    id="one-third"
    name="one-third"
    label="One-third width"
    width="one-third"
  ></govukwc-text-input>`.getHTML();

export const WidthOneQuarter = () =>
  html`<govukwc-text-input
    id="one-quarter"
    name="one-quarter"
    label="One-quarter width"
    width="one-quarter"
  ></govukwc-text-input>`.getHTML();
