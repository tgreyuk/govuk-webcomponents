import { html, LitElement } from 'lit-element';
import componentStyles from './govuk-radios.styles';
import { FieldsetComponent } from '../govuk-fieldset/govuk-fieldset.component';
import { replaceSlot, wrapEl } from '../utils';
import './govuk-radio.component';

export class RadiosComponent extends FieldsetComponent {
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
    const wrapper = document.createElement('div');
    const slot = this.shadowRoot.querySelector('slot');
    wrapper.setAttribute('class', 'govuk-radios govuk-radios--inline');
    wrapEl(slot, wrapper);
    replaceSlot(slot);
  }
}

customElements.define('govuk-radios', RadiosComponent);
