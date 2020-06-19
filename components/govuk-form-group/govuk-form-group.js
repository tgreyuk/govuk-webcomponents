import { html, LitElement } from 'lit-element';
import elementStyles from './govuk-form-group.styles';

export class FormGroup extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      hint: { type: String },
      pageLevel: { type: Boolean },
    };
  }
  static get styles() {
    return [elementStyles];
  }

  get hintId() {
    return this.hint ? this.id + '-hint' : undefined;
  }

  render() {
    return html`<div class="govuk-form-group">
      ${this.pageLevel
        ? html`<h1 class="govuk-label-wrapper">
            <label class="govuk-label govuk-label--l" for=${this.id}>
              ${this.label}
            </label>
          </h1>`
        : html`<label class="govuk-label" for=${this.id}>
            ${this.label}
          </label>`}
      ${this.hint
        ? html` <span id=${this.hintId} class="govuk-hint">
            ${this.hint}
          </span>`
        : ''}
      ${this.renderControl()}
    </div>`;
  }
}