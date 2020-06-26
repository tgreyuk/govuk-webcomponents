import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-warning-text.styles';

export class WarningTextComponent extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div class="govuk-warning-text">
      <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong class="govuk-warning-text__text">
        <span class="govuk-warning-text__assistive">Warning</span>
        ${this.text}
      </strong>
    </div>`;
  }
}

customElements.define('govukwc-warning-text', WarningTextComponent);
