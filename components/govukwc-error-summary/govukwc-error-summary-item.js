import { html, LitElement } from 'lit-element';

export class ErrorSummaryItemComponent extends LitElement {
  static get properties() {
    return {
      /**
       * The target id of invalid component
       */
      target: { type: String },
      /**
       * Associated error message
       */
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
