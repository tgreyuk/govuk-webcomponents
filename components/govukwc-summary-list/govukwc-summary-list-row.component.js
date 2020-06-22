import { html, LitElement } from 'lit-element';

/**
 @slot Default - summary value
 */

export class SummaryListRowComponent extends LitElement {
  static get properties() {
    return {
      key: { type: String },
      value: { type: String },
      action: { type: String },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div class="govuk-summary-list__row" data-key=${this.key}>
      <dt class="govuk-summary-list__key">
        ${this.key}
      </dt>
      <dd class="govuk-summary-list__value">
        <slot></slot>
      </dd>
      ${this.action
        ? html` <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">
              ${this.action}<span class="govuk-visually-hidden">
                ${this.key.toLowerCase()}</span
              >
            </a>
          </dd>`
        : ''}
    </div>`;
  }
}

customElements.define('govukwc-summary-list-row', SummaryListRowComponent);
