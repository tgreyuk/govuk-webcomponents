import { html, LitElement } from 'lit-element';

export class SelectOptionComponent extends LitElement {
  static get properties() {
    return {
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
    return html`<option value=${this.value}>${this.label}</option>`;
  }
}

customElements.define('govukwc-select-option', SelectOptionComponent);
