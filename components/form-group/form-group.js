import { html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import elementStyles from './form-group.styles';

export class FormGroup extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      hint: { type: String },
      error: { type: String },
      message: { type: String },
      pageLevel: { type: Boolean },
      invalid: { type: Boolean },
    };
  }
  static get styles() {
    return [elementStyles];
  }

  get hintId() {
    return this.hint ? this.id + '-hint' : undefined;
  }

  get errorId() {
    return this.error ? this.id + '-error' : undefined;
  }

  render() {
    const classes = {
      'govuk-form-group': true,
      'govuk-form-group--error': this.invalid,
    };
    return html`<div class=${classMap(classes)}>
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
      ${this.invalid && this.error
        ? html` <span id=${this.errorId} class="govuk-error-message">
            <span class="govuk-visually-hidden">Error:</span> ${this.error}
          </span>`
        : ``}
      ${this.renderControl()}
      ${this.message
        ? html` <span
            id="${this.id}-info"
            class="govuk-hint govuk-character-count__message"
            aria-live="polite"
          >
            ${this.message}
          </span>`
        : ``}
    </div>`;
  }
}
