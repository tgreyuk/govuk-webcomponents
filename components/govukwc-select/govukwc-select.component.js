import { html } from 'lit-element';
import componentStyles from './govukwc-select.styles';
import { FormGroup } from '../form-group/form-group';
import './govukwc-select-option.component';
import { replaceSlot, wrapEl } from '../utils';

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

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    replaceSlot(slot);
    const select = document.createElement('select');
    select.setAttribute('class', 'govuk-select');
    select.setAttribute('id', this.id);
    select.setAttribute('name', this.name);
    wrapEl(slot, select);
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
