import { html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { classMap } from 'lit-html/directives/class-map';
import componentStyles from './govukwc-text-input.styles';
import { FormGroup } from '../../base/form-group/form-group';

/**
 * @fires govukwc:change - Fires when on field 'change' event
 * @fires govukwc:keyup - Fires when on field 'keyup' event
 */
export class TextInputComponent extends FormGroup {
  static get properties() {
    return {
      /**
       * Field width setting - one of `"20"` `"10"` `"5"` `"4"` `"3"` `"2"` `"full"` `"three-quarters"` `"two-thirds"` `"one-half"` `"one-third"` `"one-quarter"`
       */
      width: { type: String },
      /**
       * Input value
       */
      value: { type: String },

      /**
       * If value entered should be a whole number
       */
      number: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles, componentStyles];
  }

  constructor() {
    super();
    this.width = '20';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this.input = this.shadowRoot.querySelector('input');
  }

  handleChange() {
    const event = new CustomEvent('govukwc:change', {
      detail: {
        value: this.input.value,
      },
    });
    this.dispatchEvent(event);
  }

  handleKeyup() {
    const event = new CustomEvent('govukwc:keyup', {
      detail: {
        value: this.input.value,
      },
    });
    this.value = this.input.value;
    this.dispatchEvent(event);
  }

  renderControl() {
    const fixedWidths = ['20', '10', '5', '4', '3', '2'];
    const classes = {
      ['govuk-input']: true,
      [`govuk-input--width-${this.width}`]: fixedWidths.includes(this.width),
      [`govuk-!-width-${this.width}`]: !fixedWidths.includes(this.width),
    };
    return html`<input
      class=${classMap(classes)}
      id=${this.id}
      name=${this.name}
      type="text"
      pattern="${ifDefined(this.number ? '[0-9]*' : undefined)}"
      inputmode="${ifDefined(this.number ? 'numeric' : undefined)}"
      aria-describedby=${ifDefined(this.hintId)}
      @change=${this.handleChange}
      @keyup=${this.handleKeyup}
    />`;
  }
}

customElements.define('govukwc-text-input', TextInputComponent);
