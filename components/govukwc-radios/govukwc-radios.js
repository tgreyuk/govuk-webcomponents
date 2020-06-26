import componentStyles from './govukwc-radios.styles';
import { FieldsetComponent } from '../govukwc-fieldset/govukwc-fieldset';
import { getSlotHTML, wrapEl } from '../../base/utils';
import './govukwc-radio';

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

  async firstUpdated() {
    const wrapper = document.createElement('div');
    const slot = this.shadowRoot.querySelector('slot');
    wrapper.setAttribute('class', 'govuk-radios govuk-radios--inline');
    wrapEl(slot, wrapper);
    const slotHTML = await getSlotHTML(slot);
    slot.parentNode.innerHTML = slotHTML;
  }
}

customElements.define('govukwc-radios', RadiosComponent);
