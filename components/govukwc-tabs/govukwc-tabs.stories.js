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
      <govukwc-table>
        <govukwc-table-row slot="head">
          <govukwc-table-cell scope="col">Case manager</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases opened</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases closed</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>David Francis</govukwc-table-cell>
          <govukwc-table-cell>3</govukwc-table-cell>
          <govukwc-table-cell>0</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Paul Farmer</govukwc-table-cell>
          <govukwc-table-cell>1</govukwc-table-cell>
          <govukwc-table-cell>0</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Rita Patel</govukwc-table-cell>
          <govukwc-table-cell>2</govukwc-table-cell>
          <govukwc-table-cell>0</govukwc-table-cell>
        </govukwc-table-row>
      </govukwc-table>
    </govukwc-tabs-panel>
    <govukwc-tabs-panel heading="Past week" id="past-week">
      <govukwc-table>
        <govukwc-table-row slot="head">
          <govukwc-table-cell scope="col">Case manager</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases opened</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases closed</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>David Francis</govukwc-table-cell>
          <govukwc-table-cell>24</govukwc-table-cell>
          <govukwc-table-cell>18</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Paul Farmer</govukwc-table-cell>
          <govukwc-table-cell>16</govukwc-table-cell>
          <govukwc-table-cell>20</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Rita Patel</govukwc-table-cell>
          <govukwc-table-cell>24</govukwc-table-cell>
          <govukwc-table-cell>27</govukwc-table-cell>
        </govukwc-table-row>
      </govukwc-table>
    </govukwc-tabs-panel>
    <govukwc-tabs-panel heading="Past month" id="past-month">
      <govukwc-table>
        <govukwc-table-row slot="head">
          <govukwc-table-cell scope="col">Case manager</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases opened</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases closed</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>David Francis</govukwc-table-cell>
          <govukwc-table-cell>98</govukwc-table-cell>
          <govukwc-table-cell>95</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Paul Farmer</govukwc-table-cell>
          <govukwc-table-cell>1222</govukwc-table-cell>
          <govukwc-table-cell>131</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Rita Patel</govukwc-table-cell>
          <govukwc-table-cell>126</govukwc-table-cell>
          <govukwc-table-cell>142</govukwc-table-cell>
        </govukwc-table-row>
      </govukwc-table>
    </govukwc-tabs-panel>
    <govukwc-tabs-panel heading="Past year" id="past-year">
      <govukwc-table>
        <govukwc-table-row slot="head">
          <govukwc-table-cell scope="col">Case manager</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases opened</govukwc-table-cell>
          <govukwc-table-cell scope="col">Cases closed</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>David Francis</govukwc-table-cell>
          <govukwc-table-cell>1380</govukwc-table-cell>
          <govukwc-table-cell>1472</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Paul Farmer</govukwc-table-cell>
          <govukwc-table-cell>1129</govukwc-table-cell>
          <govukwc-table-cell>1083</govukwc-table-cell>
        </govukwc-table-row>
        <govukwc-table-row>
          <govukwc-table-cell>Rita Patel</govukwc-table-cell>
          <govukwc-table-cell>1539</govukwc-table-cell>
          <govukwc-table-cell>1265</govukwc-table-cell>
        </govukwc-table-row>
      </govukwc-table>
    </govukwc-tabs-panel>
  </govukwc-tabs>`.getHTML();
