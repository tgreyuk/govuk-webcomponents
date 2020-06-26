import { html, LitElement } from 'lit-element';

export class TableRowComponent extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<tr class="govuk-table__row">
      <slot></slot>
    </tr>`;
  }
}

customElements.define('govukwc-table-row', TableRowComponent);
