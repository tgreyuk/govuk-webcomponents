import { html } from 'lit-element';
import componentStyles from './govukwc-select.styles';
import { FormGroup } from '../../base/form-group/form-group';
import { getSlotHTML, wrapEl } from '../../base/utils';
import './govukwc-select-option';

/**
 * @fires govukwc:change - Fires when on field 'change' event
 */

export class SelectComponent extends FormGroup {
  static get styles() {
    return [super.styles, componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  handleChange() {
    const event = new CustomEvent('govukwc:change', {
      detail: {
        value: this.select.value,
      },
    });
    this.dispatchEvent(event);
  }

  async firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    this.select = document.createElement('select');
    this.select.setAttribute('class', 'govuk-select');
    this.select.setAttribute('id', this.id);
    this.select.setAttribute('name', this.name);
    wrapEl(slot, this.select);
    const slotHTML = await getSlotHTML(slot);
    slot.parentNode.innerHTML = slotHTML;
    this.select.addEventListener('change', () => this.handleChange());
    return;
  }

  renderControl() {
    return html` <slot></slot> `;
  }
}

customElements.define('govukwc-select', SelectComponent);
