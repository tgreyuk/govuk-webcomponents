import { html } from 'lit-html';
import { readme } from './govuk-text-input.docs';
import './govuk-text-input.component';

export default {
  title: 'Text Input',
  component: 'govuk-text-input',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-text-input
    pageLevel
    id="event-name"
    name="event-name"
    label="What is the name of the event?"
    hint="The name you’ll use on promotional material."
  ></govuk-text-input>`.getHTML();

export const Width20 = () =>
  html`<govuk-text-input
    id="width-20"
    name="width-20"
    label="20 character width"
  ></govuk-text-input>`.getHTML();

export const Width10 = () =>
  html`<govuk-text-input
    id="width-10"
    name="width-10"
    label="10 character width"
    width="10"
  ></govuk-text-input>`.getHTML();

export const Width05 = () =>
  html`<govuk-text-input
    id="width-5"
    name="width-5"
    label="5 character width"
    width="5"
  ></govuk-text-input>`.getHTML();

export const Width04 = () =>
  html`<govuk-text-input
    id="width-4"
    name="width-4"
    label="4 character width"
    width="4"
  ></govuk-text-input>`.getHTML();

export const Width03 = () =>
  html`<govuk-text-input
    id="width-3"
    name="width-3"
    label="3 character width"
    width="3"
  ></govuk-text-input>`.getHTML();

export const Width02 = () =>
  html`<govuk-text-input
    id="width-2"
    name="width-2"
    label="2 character width"
    width="2"
  ></govuk-text-input>`.getHTML();

export const WidthFull = () =>
  html`<govuk-text-input
    id="full"
    name="full"
    label="Full width"
    width="full"
  ></govuk-text-input>`.getHTML();

export const WidthThreeQuarters = () =>
  html`<govuk-text-input
    id="three-quarters"
    name="three-quarters"
    label="Three-quarters width"
    width="three-quarters"
  ></govuk-text-input>`.getHTML();

export const WidthTwoThirds = () =>
  html`<govuk-text-input
    id="two-thirds"
    name="two-thirds"
    label="Two-thirds width"
    width="two-thirds"
  ></govuk-text-input>`.getHTML();

export const WidthOneHalf = () =>
  html`<govuk-text-input
    id="one-half"
    name="one-half"
    label="One-half width"
    width="one-half"
  ></govuk-text-input>`.getHTML();

export const WidthOneThird = () =>
  html`<govuk-text-input
    id="one-third"
    name="one-third"
    label="One-third width"
    width="one-third"
  ></govuk-text-input>`.getHTML();

export const WidthOneQuarter = () =>
  html`<govuk-text-input
    id="one-quarter"
    name="one-quarter"
    label="One-quarter width"
    width="one-quarter"
  ></govuk-text-input>`.getHTML();
