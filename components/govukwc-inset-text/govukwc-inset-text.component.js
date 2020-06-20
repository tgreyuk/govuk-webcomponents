import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-inset-text.styles';

/**
 * @slot Default - Inset text content area
 */

export class InsetTextComponent extends LitElement {
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
    return html`<div class="govuk-inset-text">
      <slot></slot>
    </div>`;
  }
}

customElements.define('govukwc-inset-text', InsetTextComponent);
