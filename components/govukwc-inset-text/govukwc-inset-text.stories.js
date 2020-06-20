import { html } from 'lit-html';
import { readme } from './govukwc-inset-text.docs';
import './govukwc-inset-text.component';

export default {
  title: 'Inset text',
  component: 'govukwc-inset-text',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-inset-text>
    It can take up to 8 weeks to register a lasting power of attorney if there
    are no mistakes in the application.
  </govukwc-inset-text>`.getHTML();
