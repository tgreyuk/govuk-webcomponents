import { html } from 'lit-html';
import { readme } from './govukwc-select.docs';
import './govukwc-select';

export default {
  title: 'Select',
  component: 'govukwc-select',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-select
    pageLevel
    id="sort"
    name="sort"
    label="What is the name of the event?"
  >
    <govukwc-select-option
      label="Recently published"
      value="published"
    ></govukwc-select-option>
    <govukwc-select-option
      label="Recently updated"
      value="updated"
      selected
    ></govukwc-select-option>
    <govukwc-select-option
      label="Most views"
      value="views"
    ></govukwc-select-option>
    <govukwc-select-option
      label="Most comments"
      value="comments"
    ></govukwc-select-option>
  </govukwc-select>`.getHTML();
