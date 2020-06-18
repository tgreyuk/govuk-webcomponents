import { html } from 'lit-html';
import './govuk-accordion.component.js';
import { readme } from './govuk-accordion.docs.js';

export default {
  title: 'Accordion',
  component: 'govuk-accordion',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-accordion id="accordion-default">
    <govuk-accordion-section
      heading="Writing well for the web"
      body="This is the content for Writing well for the web."
    ></govuk-accordion-section>
    <govuk-accordion-section
      heading="Writing well for specialists"
      body="This is the content for Writing well for specialists."
    ></govuk-accordion-section>
    <govuk-accordion-section
      heading="Know your audience"
      body="This is the content for Know your audience."
    ></govuk-accordion-section>
    <govuk-accordion-section
      heading="How people read"
      body="This is the content for How people read."
    ></govuk-accordion-section>
  </govuk-accordion>`.getHTML();
