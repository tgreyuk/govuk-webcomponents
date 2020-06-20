import { html, LitElement } from 'lit-element';

export class RadioComponent extends LitElement {
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
    return html`<div class="govuk-radios__item">
      <input
        class="govuk-radios__input"
        id=${this.id}
        name=${this.name}
        type="radio"
        value=${this.value}
      />
      <label class="govuk-label govuk-radios__label" for=${this.id}>
        ${this.label}
      </label>
    </div>`;
  }
}

customElements.define('govuk-radio', RadioComponent);
