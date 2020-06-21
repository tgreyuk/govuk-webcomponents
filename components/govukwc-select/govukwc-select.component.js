import { html } from 'lit-element';
import componentStyles from './govukwc-select.styles';
import { FormGroup } from '../form-group/form-group';
import './govukwc-select-option.component';
import { replaceSlot } from '../utils';

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
  }

  renderControl() {
    return html`<div class="govuk-form-group">
      <label class="govuk-label" for=${this.id}>
        ${this.label}
      </label>
      <select class="govuk-select" id=${this.id} name=${this.name}>
        <option value="published">Recently published</option>
        <option value="updated" selected>Recently updated</option>
        <option value="views">Most views</option>
        <option value="comments">Most comments</option>
      </select>
    </div>`;
  }
}

customElements.define('govukwc-select', SelectComponent);
