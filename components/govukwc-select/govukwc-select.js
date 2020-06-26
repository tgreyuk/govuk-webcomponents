import { html } from 'lit-element';
import componentStyles from './govukwc-select.styles';
import { FormGroup } from '../../base/form-group/form-group';
import { getSlotHTML, wrapEl } from '../../base/utils';
import './govukwc-select-option';

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

  async firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    const select = document.createElement('select');
    select.setAttribute('class', 'govuk-select');
    select.setAttribute('id', this.id);
    select.setAttribute('name', this.name);
    wrapEl(slot, select);

    const slotHTML = await getSlotHTML(slot);
    slot.parentNode.innerHTML = slotHTML;
  }

  renderControl() {
    return html`<div class="govuk-form-group">
      <label class="govuk-label" for=${this.id}>
        ${this.label}
      </label>
      <slot></slot>
    </div>`;
  }
}

customElements.define('govukwc-select', SelectComponent);
