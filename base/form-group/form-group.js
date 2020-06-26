import { html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import utilitiesStyles from '../styles/utilities.styles';
import elementStyles from './form-group.styles';

export class FormGroup extends LitElement {
  static get properties() {
    return {
      /**
       * Field id
       */
      id: { type: String },
      /**
       * Field name
       */
      name: { type: String },
      /**
       * Label text
       */
      label: { type: String },
      /**
       * Hint text
       */
      hint: { type: String },
      /**
       * Error  text
       */
      error: { type: String },
      /**
       * Determines if the label should be treated as a page level h1
       */
      pageHeadingLabel: { type: Boolean },
      /**
       * Flag to define if field is in an invalid (error) state
       */
      invalid: { type: Boolean },
    };
  }
  static get styles() {
    return [utilitiesStyles, elementStyles];
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
      ${this.pageHeadingLabel
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
    </div>`;
  }
}
