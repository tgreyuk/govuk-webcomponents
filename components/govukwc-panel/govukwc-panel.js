import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-panel.styles';

/**
 * @slot Default - Panel content area
 */

export class PanelComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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
    return html`<div class="govuk-panel govuk-panel--confirmation">
      <h1 class="govuk-panel__title">
        ${this.title}
      </h1>
      <div class="govuk-panel__body">
        <slot></slot>
      </div>
    </div> `;
  }
}

customElements.define('govukwc-panel', PanelComponent);
