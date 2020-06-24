import { html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export class TableCellComponent extends LitElement {
  static get properties() {
    return {
      scope: { type: String },
      numeric: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const tdclasses = {
      'govuk-table__cell': true,
      'govuk-table__cell--numeric': this.numeric,
    };
    const thclasses = {
      'govuk-table__header': true,
      'govuk-table__header--numeric': this.numeric,
    };

    return this.scope
      ? html`<th class=${classMap(thclasses)} scope=${this.scope}>
          <slot></slot>
        </th>`
      : html`<td class=${classMap(tdclasses)}>
          <slot></slot>
        </td>`;
  }
}

customElements.define('govukwc-table-cell', TableCellComponent);
