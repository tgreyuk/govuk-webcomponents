import { html, LitElement } from 'lit-element';
import componentStyles from './govuk-fieldset.styles';

export class FieldsetComponent extends LitElement {
  static get properties() {
    return {
      legend: { type: String },
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
    return html`<fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        ${this.legend}
      </legend>
      <slot></slot>
    </fieldset>`;
  }
}

customElements.define('govuk-fieldset', FieldsetComponent);
