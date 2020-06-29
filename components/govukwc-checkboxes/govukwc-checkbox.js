import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

/**
 * @slot default - Conditional toggle content
 */
export class CheckboxComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Checkbox id
       */
      id: { type: String },
      /**
       * Checkbox name
       */
      name: { type: String },
      /**
       * Checkbox label text
       */
      label: { type: String },
      /**
       * Checkbox value
       */
      value: { type: String },
      /**
       * Flag to set checked state
       */
      checked: { type: Boolean },
      /**
       * Checkbox hint text
       */
      hint: { type: String },
    };
  }

  constructor() {
    super();
    this.checked = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  get isConditional() {
    return this.innerHTML !== '' ? true : undefined;
  }

  get hintId() {
    return this.id + '-hint';
  }

  get conditionalId() {
    return this.id + '-conditional';
  }

  render() {
    return html`<div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          id=${this.id}
          name=${this.id}
          type="checkbox"
          value=${this.value}
          ?checked=${this.checked}
          data-aria-controls=${ifDefined(
            this.isConditional ? this.conditionalId : '',
          )}
        />
        <label
          class="govuk-label govuk-checkboxes__label"
          aria-describedby=${ifDefined(this.hint ? this.hintId : '')}
          for=${this.id}
        >
          ${this.label}
        </label>
        ${this.hint
          ? html` <span
              id=${this.hintId}
              class="govuk-hint govuk-checkboxes__hint"
            >
              ${this.hint}
            </span>`
          : ``}
      </div>
      ${this.isConditional
        ? html`<div
            class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
            id="${this.id}-conditional"
          >
            <slot></slot>
          </div>`
        : ``} `;
  }
}

customElements.define('govukwc-checkbox', CheckboxComponent);
