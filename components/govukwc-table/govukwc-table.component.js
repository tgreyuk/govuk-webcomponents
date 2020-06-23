import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-table.styles';
import { classMap } from 'lit-html/directives/class-map';

export class TableComponent extends LitElement {
  static get properties() {
    return {
      caption: { type: String },
      columns: { type: Array },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.headers = this.columns.map((col) => {
      const item = {
        value: col.header,
        numeric: !!col.numeric,
      };
      return item;
    });
    const rows = [];
    this.columns.forEach((col) => {
      col.data.forEach((cell, i) => {
        const item = {
          value: cell,
          numeric: !!col.numeric,
          scoped: col.scopedRows,
        };
        if (rows[i]) {
          rows[i].push(item);
        } else {
          rows[i] = [item];
        }
      });
    });
    this.rows = rows;
  }

  render() {
    return html`<table class="govuk-table">
      <caption class="govuk-table__caption">
        ${this.caption}
      </caption>
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          ${this.headers.map((header, index) => {
            const headerClasses = {
              'govuk-table__header': true,
              'govuk-table__header--numeric': header.numeric && index > 0,
            };
            return html`<th scope="col" class=${classMap(headerClasses)}>
              ${header.value}
            </th>`;
          })}
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        ${this.rows.map(
          (row) => html` <tr class="govuk-table__row">
            ${row.map((cell, index) => {
              const cellClasses = {
                'govuk-table__cell': true,
                'govuk-table__cell--numeric': cell.numeric,
              };

              return cell.scoped
                ? html`<th scope="row" class="govuk-table__header">
                    ${cell.value}
                  </th>`
                : html`<td class=${classMap(cellClasses)}>${cell.value}</td>`;
            })}
          </tr>`,
        )}
      </tbody>
    </table>`;
  }
}

customElements.define('govukwc-table', TableComponent);
