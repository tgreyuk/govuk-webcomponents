import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-back-link.styles';

export class BackLinkComponent extends LitElement {
  static get properties() {
    return {
      /**
       * The back link url
       */
      url: { type: String },
      /**
       * The back link label
       */
      label: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
    this.label = 'Back';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<a href="${this.url}" class="govuk-back-link"
      >${this.label}</a
    >`;
  }
}

customElements.define('govukwc-back-link', BackLinkComponent);
