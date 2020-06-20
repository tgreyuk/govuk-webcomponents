import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-phase-banner.styles';

/**
 * @slot Default - Banner content area
 */

export class PhaseBannerComponent extends LitElement {
  static get properties() {
    return {
      tag: { type: String },
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
    return html`<div class="govuk-phase-banner">
      <p class="govuk-phase-banner__content">
        <strong class="govuk-tag govuk-phase-banner__content__tag">
          alpha
        </strong>
        <span class="govuk-phase-banner__text">
          <slot></slot>
        </span>
      </p>
    </div>`;
  }
}

customElements.define('govukwc-phase-banner', PhaseBannerComponent);
