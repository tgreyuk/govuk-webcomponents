import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-skip-link.styles';

/**
 * @slot Default - Slip link content area
 */

export class SkipLinkComponent extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
    this.contentId = 'content';
    this.label = 'Skip to main content';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<p class="govuk-body">
        <slot></slot>
      </p>

      <a href="#${this.contentId}" class="govuk-skip-link">${this.label}</a>`;
  }
}

customElements.define('govukwc-skip-link', SkipLinkComponent);
