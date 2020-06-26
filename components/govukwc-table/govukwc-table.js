import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-table.styles';
import './govukwc-table-row';
import './govukwc-table-cell';

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
  }

  firstUpdated() {
    const headSlot = this.shadowRoot.querySelector('slot[name]');
    const slot = this.shadowRoot.querySelector('slot:not([name])');
    const tbody = this.shadowRoot.querySelector('tbody');
    const thead = this.shadowRoot.querySelector('thead');
    const container = slot.parentNode;

    const onslotheadchange = (e) => {
      const tableRowEls = Array.from(
        this.querySelectorAll('govukwc-table-row[slot=head]'),
      );

      const rows = headSlot.assignedElements({ flatten: true });
      const trs = rows.map((row) => {
        const wrapper = document.createElement('table');
        wrapper.innerHTML = row.shadowRoot.innerHTML;
        const tr = wrapper.querySelector('tr');
        const rowSlot = row.shadowRoot.querySelector('slot');
        const cells = rowSlot.assignedElements();
        const cellsHtml = cells
          .map((cell) => {
            const cellHtml = cell.shadowRoot.innerHTML;
            const cellSlot = cell.shadowRoot.querySelector('slot');
            const slotHtml = cellSlot
              .assignedNodes()
              .map((node) => {
                if (node.nodeValue) {
                  return node.nodeValue;
                } else {
                  return node.outerHTML;
                }
              })
              .join('');
            return cellHtml.replace('<slot></slot>', slotHtml);
          })
          .join('');
        tr.innerHTML = cellsHtml;
        return tr.outerHTML;
      });
      thead.innerHTML = trs.join('');
      headSlot.removeEventListener('slotchange', onslotheadchange);
      container.removeChild(headSlot);
      tableRowEls.forEach((tableRowEl) => {
        this.removeChild(tableRowEl);
      });
    };
    const onslotchange = (e) => {
      const tableRowEls = Array.from(
        this.querySelectorAll('govukwc-table-row:not([slot])'),
      );
      const rows = slot.assignedElements({ flatten: true });
      const trs = rows.map((row) => {
        const wrapper = document.createElement('table');
        wrapper.innerHTML = row.shadowRoot.innerHTML;
        const tr = wrapper.querySelector('tr');
        const rowSlot = row.shadowRoot.querySelector('slot');
        const cells = rowSlot.assignedElements();
        const cellsHtml = cells
          .map((cell) => {
            const cellHtml = cell.shadowRoot.innerHTML;
            const cellSlot = cell.shadowRoot.querySelector('slot');
            const slotHtml = cellSlot
              .assignedNodes()
              .map((node) => {
                if (node.nodeValue) {
                  return node.nodeValue;
                } else {
                  return node.outerHTML;
                }
              })
              .join('');
            return cellHtml.replace('<slot></slot>', slotHtml);
          })
          .join('');
        tr.innerHTML = cellsHtml;
        return tr.outerHTML;
      });
      tbody.innerHTML = trs.join('');
      slot.removeEventListener('slotchange', onslotchange);
      container.removeChild(slot);
      tableRowEls.forEach((tableRowEl) => {
        this.removeChild(tableRowEl);
      });
    };
    slot.addEventListener('slotchange', onslotchange);
    headSlot.addEventListener('slotchange', onslotheadchange);
  }

  render() {
    return html`<table class="govuk-table">
      ${this.caption
        ? html` <caption class="govuk-table__caption">
            ${this.caption}
          </caption>`
        : ``}
      <thead class="govuk-table__head">
        <slot name="head"></slot>
      </thead>
      <tbody class="govuk-table__body">
        <slot></slot>
      </tbody>
    </table>`;
  }
}

customElements.define('govukwc-table', TableComponent);
