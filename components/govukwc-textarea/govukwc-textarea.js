import { html } from 'lit-element';
import componentStyles from './govukwc-textarea.styles';
import { FormGroup } from '../../base/form-group/form-group';

/**
 * @fires govukwc:change - Fires when on field 'change' event
 * @fires govukwc:keyup - Fires when on field 'keyup' event
 */
export class TextAreaComponent extends FormGroup {
  static get properties() {
    return {
      /**
       * Maximum field length
       */
      maxlength: { type: Number },
      /**
       * Field rows
       */
      rows: { type: Number },
      /**
       * Field value
       */
      value: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
    this.maxlength = 500;
    this.rows = 5;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this.textarea = this.shadowRoot.querySelector('textarea');
  }

  handleChange() {
    const event = new CustomEvent('govukwc:change', {
      detail: {
        value: this.textarea.value,
      },
    });
    this.dispatchEvent(event);
  }

  handleKeyup() {
    const event = new CustomEvent('govukwc:keyup', {
      detail: {
        value: this.textarea.value,
      },
    });
    this.dispatchEvent(event);
  }

  renderControl() {
    return html`
      <textarea
        class="govuk-textarea"
        id=${this.id}
        name=${this.name}
        value=${this.value}
        rows=${this.rows}
        aria-describedby=${this.hintId}
        @change=${this.handleChange}
        @keyup=${this.handleKeyup}
      ></textarea>
    `;
  }
}

customElements.define('govukwc-textarea', TextAreaComponent);
