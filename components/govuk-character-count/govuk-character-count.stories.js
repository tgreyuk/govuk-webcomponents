import { html } from 'lit-html';
import { readme } from './govuk-character-count.docs';
import './govuk-character-count.component';

export default {
  title: 'Character Count',
  component: 'govuk-character-count',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const MaxLength = () =>
  html`<govuk-character-count
    id="char-count-length"
    name="char-count-length"
    label="Can you provide more detail?"
    hint="Do not include personal or financial information like your National Insurance number or credit card details."
    maxlength="500"
  >
  </govuk-character-count>`.getHTML();

export const MaxWords = () =>
  html`<govuk-character-count
    pageLevel
    id="char-count-words"
    name="char-count-words"
    label="Describe the nature of your event"
    maxwords="50"
  ></govuk-character-count>`.getHTML();
