import { html } from 'lit-html';
import { readme } from './govukwc-details.docs';
import './govukwc-details.component';

export default {
  title: 'Details',
  component: 'govukwc-details',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-details summary="Help with nationality">
    We need to know your nationality so we can work out which elections you’re
    entitled to vote in. If you cannot provide your nationality, you’ll have to
    send copies of identity documents through the post.
  </govukwc-details>`.getHTML();
