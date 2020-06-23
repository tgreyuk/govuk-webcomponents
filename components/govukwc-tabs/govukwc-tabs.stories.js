import { html } from 'lit-html';
import { readme } from './govukwc-tabs.docs';
import './govukwc-tabs.component';
import '../govukwc-table/govukwc-table.component';

export default {
  title: 'Tabs',
  component: 'govukwc-tabs',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-tabs title="Contents">
    <govukwc-tabs-panel heading="Past day" id="past-day">
      <govukwc-table
        caption="Dates and amounts"
        columns='[{"header":"Case manager","data":["David Francis","Paul Farmer","Rita Patel"]},{"header":"Cases opened","data":["3","2","1"]},{"header":"Cases closed","data":["0","0","0"]}]'
      ></govukwc-table>
    </govukwc-tabs-panel>
    <govukwc-tabs-panel heading="Past week" id="past-week">
      <govukwc-table
        caption="Dates and amounts"
        columns='[{"header":"Case manager","data":["David Francis","Paul Farmer","Rita Patel"]},{"header":"Cases opened","data":["24","16","24"]},{"header":"Cases closed","data":["18","20","27"]}]'
      ></govukwc-table>
    </govukwc-tabs-panel>
    <govukwc-tabs-panel heading="Past month" id="past-month">
      <govukwc-table
        caption="Dates and amounts"
        columns='[{"header":"Case manager","data":["David Francis","Paul Farmer","Rita Patel"]},{"header":"Cases opened","data":["98","122","126"]},{"header":"Cases closed","data":["95","131","142"]}]'
      ></govukwc-table>
    </govukwc-tabs-panel>
    <govukwc-tabs-panel heading="Past year" id="past-year">
      <govukwc-table
        caption="Dates and amounts"
        columns='[{"header":"Case manager","data":["David Francis","Paul Farmer","Rita Patel"]},{"header":"Cases opened","data":["1380","1129","1539"]},{"header":"Cases closed","data":["1472","1083","1265"]}]'
      ></govukwc-table>
    </govukwc-tabs-panel>
  </govukwc-tabs>`.getHTML();
