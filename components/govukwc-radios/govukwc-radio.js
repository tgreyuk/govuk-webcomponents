import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export class RadioComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Radio id
       */
      id: { type: String },
      /**
       * Radio name
       */
      name: { type: String },
      /**
       * Radio label
       */
      label: { type: String },
      /**
       * Radio value
       */
      value: { type: String },
      /**
       * Radio hint text
       */
      hint: { type: String },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  get hintId() {
    return this.id + '-hint';
  }

  render() {
    return html`<div class="govuk-radios__item">
      <input
        class="govuk-radios__input"
        id=${this.id}
        name=${this.name}
        type="radio"
        value=${this.value}
        aria-describedby="${ifDefined(this.hint ? this.hintId : '')}"
      />
      <label class="govuk-label govuk-radios__label" for=${this.id}>
        ${this.label}
      </label>
      ${this.hint
        ? html` <span id=${this.hintId} class="govuk-hint govuk-radios__hint">
            ${this.hint}
          </span>`
        : ``}
    </div>`;
  }
}

customElements.define('govukwc-radio', RadioComponent);
