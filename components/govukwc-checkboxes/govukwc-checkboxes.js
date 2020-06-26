import componentStyles from './govukwc-checkboxes.styles';
import { FieldsetComponent } from '../govukwc-fieldset/govukwc-fieldset';
import { getSlotHTML, wrapEl } from '../../base/utils';
import './govukwc-checkbox';

export class CheckboxesComponent extends FieldsetComponent {
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
    wrapper.setAttribute('class', 'govuk-checkboxes');
    wrapEl(slot, wrapper);
    const slotHTML = await getSlotHTML(slot);
    slot.parentNode.innerHTML = slotHTML;
    return;
  }
}

customElements.define('govukwc-checkboxes', CheckboxesComponent);
