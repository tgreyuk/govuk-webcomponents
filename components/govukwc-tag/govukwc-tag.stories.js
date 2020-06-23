import { html } from 'lit-html';
import { readme } from './govukwc-tag.docs';
import './govukwc-tag.component';

export default {
  title: 'Tag',
  component: 'govukwc-tag',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Grey = () =>
  html`<govukwc-tag label="Inactive" colour="grey"></govukwc-tag>`.getHTML();
export const Green = () =>
  html`<govukwc-tag label="New" colour="green"></govukwc-tag>`.getHTML();
