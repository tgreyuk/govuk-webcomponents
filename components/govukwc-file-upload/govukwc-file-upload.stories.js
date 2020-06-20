import { html } from 'lit-html';
import { readme } from './govukwc-file-upload.docs';
import './govukwc-file-upload.component';

export default {
  title: 'File upload',
  component: 'govukwc-file-upload',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-file-upload></govukwc-file-upload>`.getHTML();
