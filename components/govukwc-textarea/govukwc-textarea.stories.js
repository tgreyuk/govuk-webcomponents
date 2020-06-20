import { html } from 'lit-html';
import { readme } from './govukwc-textarea.docs';
import './govukwc-textarea.component';

export default {
  title: 'Textarea',
  component: 'govukwc-textarea',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-textarea
    pageLevel
    id="event-name"
    name="event-name"
    label="Can you provide more detail?"
    hint="Do not include personal or financial information, like your National Insurance number or credit card details."
  ></govukwc-textarea>`.getHTML();
