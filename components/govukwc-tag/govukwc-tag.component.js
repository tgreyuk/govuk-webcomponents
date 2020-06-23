import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-tag.styles';

export class TagComponent extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      colour: { type: String },
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
    return html`<strong class="govuk-tag govuk-tag--${this.colour}">
      ${this.label}
    </strong>`;
  }
}

customElements.define('govukwc-tag', TagComponent);
