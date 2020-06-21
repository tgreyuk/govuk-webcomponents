import { html } from 'lit-html';
import { readme } from './govukwc-skip-link.docs';
import './govukwc-skip-link.component';

export default {
  title: 'Skip link',
  component: 'govukwc-skip-link',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-skip-link>
    To view the skip link component tab to this example, or click inside this
    example and press tab.
  </govukwc-skip-link>`.getHTML();
