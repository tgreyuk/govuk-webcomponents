import { html } from 'lit-html';
import { readme } from './govukwc-table.docs';
import './govukwc-table.component';

export default {
  title: 'Table',
  component: 'govukwc-table',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

const defaultColumns = [
  {
    header: 'Date',
    scopedRows: true,
    data: ['First 6 weeks', 'Next 33 weeks', 'Total estimated pay'],
  },
  {
    header: 'Amount',
    data: ['£109.80 per week', '£109.80 per week', '£109.80 per week'],
  },
];

const numberColumns = [
  {
    header: 'Month you apply',
    scopedRows: true,
    data: ['January', 'February', 'March'],
  },
  {
    header: 'Rate for bicycles',
    numeric: true,
    data: ['£85', '£75', '£165'],
  },
  {
    header: 'Rate for vehicles',
    numeric: true,
    data: ['£95', '£55', '£125'],
  },
];

export const Default = () =>
  html`<govukwc-table caption="Dates and amounts"></govukwc-table>`
    .getHTML()
    .replace('>', `columns='${JSON.stringify(defaultColumns)}'>`);

export const Numbers = () =>
  html`<govukwc-table caption="Months and rates"> </govukwc-table>`
    .getHTML()
    .replace('>', `columns='${JSON.stringify(numberColumns)}'>`);
