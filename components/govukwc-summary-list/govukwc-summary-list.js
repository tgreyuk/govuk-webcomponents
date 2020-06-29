import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-summary-list.styles';
import './govukwc-summary-list-row';

/**
 * @fires clicked - Fires when action has been clicked
 * @slot Default - x number of summary-list-row components
 */

export class SummaryListComponent extends LitElement {
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
    this.shadowRoot.addEventListener('slotchange', (e) => {
      const slot = this.shadowRoot.querySelector('slot');
      const nodes = Array.from(
        this.querySelectorAll('govukwc-summary-list-row'),
      );
      const slotNodes = nodes.map((node) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = node.shadowRoot.innerHTML;
        const wrapperNode = wrapper.firstElementChild;
        const value = wrapperNode.querySelector('.govuk-summary-list__value');
        value.innerHTML = node.innerHTML;
        return wrapperNode;
      });
      const container = slot.parentNode;
      container.removeChild(slot);
      slotNodes.forEach((node) => container.appendChild(node));
      const rows = Array.from(container.children);
      rows.forEach((row, index) => {
        row.addEventListener('click', (e) => {
          e.preventDefault();
          const event = new CustomEvent('govukwc:click', {
            detail: {
              selectedIndex: index,
              key: row.getAttribute('data-key'),
            },
          });
          this.dispatchEvent(event);
        });
      });
    });
  }

  render() {
    return html`<dl class="govuk-summary-list">
        <slot></slot>
      </div>`;
  }
}

customElements.define('govukwc-summary-list', SummaryListComponent);
