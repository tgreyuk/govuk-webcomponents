import { html, LitElement } from 'lit-element';

export class TabsPanelComponent extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      id: { heading: String },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div class="govuk-tabs__panel" id=${this.id}>
      <h2 class="govuk-heading-l">${this.heading}</h2>
      <slot></slot>
    </div>`;
  }
}

customElements.define('govukwc-tabs-panel', TabsPanelComponent);
