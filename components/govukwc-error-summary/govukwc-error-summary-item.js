import { html, LitElement } from 'lit-element';

export class ErrorSummaryItemComponent extends LitElement {
  static get properties() {
    return {
      target: { type: String },
      message: { type: String },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <li>
        <a href="#${this.target}">${this.message}</a>
      </li>
    `;
  }
}

customElements.define('govukwc-error-summary-item', ErrorSummaryItemComponent);
