import { html } from 'lit-html';
import { readme } from './govukwc-phase-banner.docs';
import './govukwc-phase-banner.component';

export default {
  title: 'Phase banner',
  component: 'govukwc-phase-banner',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-phase-banner tag="alpha">
    This is a new service – your
    <a class="govuk-link" href="#">feedback</a> will help us to improve it.
  </govukwc-phase-banner>`.getHTML();
