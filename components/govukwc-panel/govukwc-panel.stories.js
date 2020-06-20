import { html } from 'lit-html';
import { readme } from './govukwc-panel.docs';
import './govukwc-panel.component';

export default {
  title: 'Panel',
  component: 'govukwc-panel',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-panel title="Application complete">
    Your reference number<br /><strong>HDJ2123F</strong>
  </govukwc-panel>`.getHTML();
