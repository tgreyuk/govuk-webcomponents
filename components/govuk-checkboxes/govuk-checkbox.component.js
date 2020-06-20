import { html, LitElement } from 'lit-element';

export class CheckboxComponent extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      value: { type: String },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div class="govuk-checkboxes__item">
      <input
        class="govuk-checkboxes__input"
        id=${this.id}
        name=${this.id}
        type="checkbox"
        value=${this.value}
      />
      <label class="govuk-label govuk-checkboxes__label" for=${this.id}>
        ${this.label}
      </label>
    </div>`;
  }
}

customElements.define('govuk-checkbox', CheckboxComponent);
