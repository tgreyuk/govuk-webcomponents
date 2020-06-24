import { html } from 'lit-html';
import './govukwc-accordion.component.js';
import { readme } from './govukwc-accordion.docs.js';

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
    <govukwc-accordion-section heading="Writing well for the web"
      >This is the content for Writing well for the
      web.</govukwc-accordion-section
    >
    <govukwc-accordion-section heading="Writing well for specialists"
      >This is the content for Writing well for
      specialists.</govukwc-accordion-section
    >
    <govukwc-accordion-section heading="Know your audience"
      >This is the content for Know your audience.</govukwc-accordion-section
    >
    <govukwc-accordion-section heading="How people read"
      >This is the content for How people read.</govukwc-accordion-section
    >
  </govukwc-accordion>`.getHTML();
