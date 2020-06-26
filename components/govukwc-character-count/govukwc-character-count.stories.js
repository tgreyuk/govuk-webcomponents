import { html } from 'lit-html';
import { readme } from './govukwc-character-count.docs';
import './govukwc-character-count';

export default {
  title: 'Character Count',
  component: 'govukwc-character-count',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const CharacterCount = () =>
  html`<govukwc-character-count
    id="char-count-length"
    name="char-count-length"
    label="Can you provide more detail?"
    hint="Do not include personal or financial information like your National Insurance number or credit card details."
    maxlength="500"
  >
  </govukwc-character-count>`.getHTML();

export const WordCount = () =>
  html`<govukwc-character-count
    pageHeadingLabel
    id="char-count-words"
    name="char-count-words"
    label="Describe the nature of your event"
    maxwords="50"
  ></govukwc-character-count>`.getHTML();
