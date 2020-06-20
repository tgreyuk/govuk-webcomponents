import { html, LitElement } from 'lit-element';
import componentStyles from './govuk-checkboxes.styles';
import { FieldsetComponent } from '../govuk-fieldset/govuk-fieldset.component';
import { replaceSlot, wrapEl } from '../utils';
import './govuk-checkbox.component';

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

customElements.define('govuk-checkboxes', CheckboxesComponent);
