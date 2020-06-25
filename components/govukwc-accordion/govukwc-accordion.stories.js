import { html } from 'lit-html';
import { readme } from './govukwc-accordion.docs.js';
import './govukwc-accordion.component.js';

export default {
  title: 'Accordion',
  component: 'govukwc-accordion',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-accordion id="accordion-default">
    <govukwc-accordion-section heading="Writing well for the web">
      <p class="govuk-body">
        This is the content for Writing well for the web.
      </p></govukwc-accordion-section
    >
    <govukwc-accordion-section heading="Writing well for specialists">
      <p class="govuk-body">
        This is the content for Writing well for specialists.
      </p></govukwc-accordion-section
    >
    <govukwc-accordion-section heading="Know your audience">
      <p class="govuk-body">
        This is the content for Know your audience.
      </p></govukwc-accordion-section
    >
    <govukwc-accordion-section heading="How people read">
      <p class="govuk-body">
        This is the content for How people read.
      </p></govukwc-accordion-section
    >
  </govukwc-accordion>`.getHTML();
