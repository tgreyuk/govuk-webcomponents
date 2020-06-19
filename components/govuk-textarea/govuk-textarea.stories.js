import { html } from 'lit-html';
import { readme } from './govuk-textarea.docs';
import './govuk-textarea.component';

export default {
  title: 'Textarea',
  component: 'govuk-textarea',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govuk-textarea
    pageLevel
    id="event-name"
    name="event-name"
    label="Can you provide more detail?"
    hint="Do not include personal or financial information, like your National Insurance number or credit card details."
  ></govuk-textarea>`.getHTML();
