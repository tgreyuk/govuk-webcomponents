import { html } from 'lit-html';
import { readme } from './govukwc-summary-list.docs';
import './govukwc-summary-list.component';

export default {
  title: 'Summary list',
  component: 'govukwc-summary-list',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-summary-list>
    <govukwc-summary-list-row key="Name" actionLabel="Change" action="Change"
      >Sarah Philips</govukwc-summary-list-row
    >
    <govukwc-summary-list-row key="Contact information" action="Change">
      72 Guild Street<br />London<br />SE23 6FH"
    </govukwc-summary-list-row>
    <govukwc-summary-list-row key="Contact details" action="Change">
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </govukwc-summary-list-row>
  </govukwc-summary-list>`.getHTML();
