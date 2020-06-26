import { html } from 'lit-html';
import { readme } from './govukwc-table.docs';
import './govukwc-table';

export default {
  title: 'Table',
  component: 'govukwc-table',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-table caption="Dates and amounts">
    <govukwc-table-row slot="head">
      <govukwc-table-cell scope="col">Date</govukwc-table-cell>
      <govukwc-table-cell scope="col">Amount</govukwc-table-cell>
    </govukwc-table-row>
    <govukwc-table-row>
      <govukwc-table-cell scope="row">First 6 weeks</govukwc-table-cell>
      <govukwc-table-cell>£109.80 per week</govukwc-table-cell>
    </govukwc-table-row>
    <govukwc-table-row>
      <govukwc-table-cell scope="row">Next 33 weeks</govukwc-table-cell>
      <govukwc-table-cell>£109.80 per week</govukwc-table-cell>
    </govukwc-table-row>
    <govukwc-table-row>
      <govukwc-table-cell scope="row">Total estimated pay</govukwc-table-cell>
      <govukwc-table-cell>£4,282.20</govukwc-table-cell>
    </govukwc-table-row>
  </govukwc-table>`.getHTML();

export const Number = () =>
  html`<govukwc-table caption="Months and rates">
    <govukwc-table-row slot="head">
      <govukwc-table-cell scope="col">Month you apply</govukwc-table-cell>
      <govukwc-table-cell scope="col" numeric
        >Rate for bicycles</govukwc-table-cell
      >
      <govukwc-table-cell scope="col" numeric
        >Rate for vehicles</govukwc-table-cell
      >
    </govukwc-table-row>
    <govukwc-table-row>
      <govukwc-table-cell scope="row">January</govukwc-table-cell>
      <govukwc-table-cell numeric>£85</govukwc-table-cell>
      <govukwc-table-cell numeric>£95</govukwc-table-cell>
    </govukwc-table-row>
    <govukwc-table-row>
      <govukwc-table-cell scope="row">February</govukwc-table-cell>
      <govukwc-table-cell numeric>£75</govukwc-table-cell>
      <govukwc-table-cell numeric>£55</govukwc-table-cell>
    </govukwc-table-row>
    <govukwc-table-row>
      <govukwc-table-cell scope="row">March</govukwc-table-cell>
      <govukwc-table-cell numeric>£165</govukwc-table-cell>
      <govukwc-table-cell numeric>£125</govukwc-table-cell>
    </govukwc-table-row>
  </govukwc-table>`.getHTML();
