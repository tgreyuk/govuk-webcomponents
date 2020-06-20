import componentStyles from './govukwc-checkboxes.styles';
import { FieldsetComponent } from '../govukwc-fieldset/govukwc-fieldset.component';
import { replaceSlot, wrapEl } from '../utils';
import './govukwc-checkbox.component';

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

  firstUpdated() {
    const wrapper = document.createElement('div');
    const slot = this.shadowRoot.querySelector('slot');
    wrapper.setAttribute('class', 'govuk-checkboxes');
    wrapEl(slot, wrapper);
    replaceSlot(slot);
  }
}

customElements.define('govukwc-checkboxes', CheckboxesComponent);
