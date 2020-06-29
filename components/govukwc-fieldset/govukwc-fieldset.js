import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import componentStyles from './govukwc-fieldset.styles';

export class FieldsetComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Fieldset legend
       */
      legend: { type: String },
      /**
       * Wheter to render the legend in an h1
       */
      pageHeadingLegend: { type: Boolean },
      /**
       * Fieldset hint
       */
      hint: { type: String },
      /**
       * Flag to determine if is invalid (in error state)
       */
      invalid: { type: Boolean },
      /**
       * Error text
       */
      error: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
    this.pageHeadingLegend = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  legendTemplate(size = 'l') {
    return html`<legend
      class="govuk-fieldset__legend govuk-fieldset__legend--${size}"
    >
      ${this.pageHeadingLegend
        ? html` <h1 class="govuk-fieldset__heading">${this.legend}</h1>`
        : html` ${this.legend}`}
    </legend>`;
  }

  hintTemplate() {
    if (this.hint) {
      return html`<span class="govuk-hint">
        ${this.hint}
      </span>`;
    }
    return null;
  }

  errorTemplate() {
    if (this.invalid) {
      return html` <span id=${this.errorId} class="govuk-error-message">
        <span class="govuk-visually-hidden">Error:</span>
        ${this.error}
      </span>`;
    }
    return null;
  }

  get describedByIds() {
    const ids = [];
    if (this.hint) {
      ids.push(this.hintId);
    }
    if (this.invalid) {
      ids.push(this.errorId);
    }
    return ids.join(' ');
  }

  render() {
    return html`<fieldset
      class="govuk-fieldset"
      aria-describedby="${ifDefined(
        this.describedByIds.length > 0 ? this.describedByIds : '',
      )}"
    >
      ${this.legendTemplate()} ${this.hintTemplate()} ${this.errorTemplate()}
      <slot></slot>
    </fieldset>`;
  }
}

customElements.define('govukwc-fieldset', FieldsetComponent);
