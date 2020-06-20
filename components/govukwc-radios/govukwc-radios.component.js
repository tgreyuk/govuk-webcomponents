import componentStyles from './govukwc-radios.styles';
import { FieldsetComponent } from '../govukwc-fieldset/govukwc-fieldset.component';
import { replaceSlot, wrapEl } from '../utils';
import './govukwc-radio.component';

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

customElements.define('govukwc-radios', RadiosComponent);
