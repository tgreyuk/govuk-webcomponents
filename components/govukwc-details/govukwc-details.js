import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-details.styles';

/**
 * @slot Default - Details content area
 */

export class DetailsComponent extends LitElement {
  static get properties() {
    return {
      summary: { type: String },
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
    return html`<details class="govuk-details" data-module="govuk-details">
      <summary class="govuk-details__summary">
        <span class="govuk-details__summary-text">
          ${this.summary}
        </span>
      </summary>
      <div class="govuk-details__text">
        <slot></slot>
      </div>
    </details>`;
  }
}

customElements.define('govukwc-details', DetailsComponent);
