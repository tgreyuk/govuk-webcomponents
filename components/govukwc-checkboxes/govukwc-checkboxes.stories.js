import { html } from 'lit-html';
import { readme } from './govukwc-checkboxes.docs';
import './govukwc-checkboxes';
import '../govukwc-text-input/govukwc-text-input';

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
    pageHeadingLegend
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

export const Small = () =>
  html`<govukwc-checkboxes legend="Organisation" small>
    <govukwc-checkbox
      id="org-hmrc"
      name="org-hmrc"
      label="HM Revenue and Customs (HMRC)"
      value="hmrc"
    ></govukwc-checkbox>
    <govukwc-checkbox
      id="org-employment-tribunal"
      name="org-employment-tribunal"
      label="Employment Tribunal"
      value="employment-tribunal"
    ></govukwc-checkbox>
    <govukwc-checkbox
      id="org-mod"
      name="org-mod"
      label="Ministry of Defence"
      value="mod"
    ></govukwc-checkbox
    ><govukwc-checkbox
      id="org-dep-of-transport"
      name="org-dep-of-transport"
      label="Department for Transport"
      value="dep-of-transport"
    ></govukwc-checkbox>
  </govukwc-checkboxes>`.getHTML();

export const Error = () =>
  html`<govukwc-checkboxes
    legend="What is your nationality?"
    hint="If you have dual nationality, select all options that are relevant to you."
    error="Select if you are British, Irish or a citizen of a different country"
    invalid
  >
    <govukwc-checkbox
      id="nationality-british"
      name="nationality-british"
      label="British"
      value="british"
      hint="including English, Scottish, Welsh and Northern Irish"
    ></govukwc-checkbox>
    <govukwc-checkbox
      id="nationality-irish"
      name="nationality-irish"
      label="Irish"
      value="Irish"
    ></govukwc-checkbox>
    <govukwc-checkbox
      id="nationality-other"
      name="nationality-irish"
      label="Citizen of another country"
      value="other"
    ></govukwc-checkbox>
  </govukwc-checkboxes>`.getHTML();

export const ConditionalInputs = () =>
  html`<govukwc-checkboxes
    legend="How would you like to be contacted?"
    hint="Select all options that are relevant to you."
  >
    <govukwc-checkbox
      id="contact-email"
      name="contact-email"
      label="Email"
      value="email"
      checked
    >
      <govukwc-text-input
        id="contact-email-conditional"
        name="contact-email-conditional"
        label="Email address"
      ></govukwc-text-input>
    </govukwc-checkbox>
    <govukwc-checkbox
      id="contact-phone"
      name="contact-phone"
      label="Phone"
      value="phone"
    >
      <govukwc-text-input
        id="contact-phone-conditional"
        name="contact-phone-conditional"
        label="Phone number"
      ></govukwc-text-input>
    </govukwc-checkbox>
    <govukwc-checkbox
      id="contact-text"
      name="contact-text"
      label="Text message"
      value="text"
    >
      <govukwc-text-input
        id="contact-text-conditional"
        name="contact-text-conditional"
        label="Mobile phone number"
      ></govukwc-text-input
    ></govukwc-checkbox>
  </govukwc-checkboxes>`.getHTML();
