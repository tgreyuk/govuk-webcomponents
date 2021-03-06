import { html } from 'lit-html';
import { readme } from './govukwc-back-link.docs';
import './govukwc-back-link';

export default {
  title: 'Back Link',
  component: 'govukwc-back-link',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-back-link
    label="Back"
    url="https://www.gov.uk/"
  ></govukwc-back-link>`.getHTML();
