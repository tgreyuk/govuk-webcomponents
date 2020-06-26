import { html } from 'lit-element';
import componentStyles from './govukwc-textarea.styles';
import { FormGroup } from '../../base/form-group/form-group';

export class TextAreaComponent extends FormGroup {
  static get properties() {
    return {
      /**
       * Maximum field length
       */
      maxlength: { type: Number },
      /**
       * Textarea rows
       */
      rows: { type: Number },
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

  renderControl() {
    return html`
      <textarea
        class="govuk-textarea"
        id=${this.id}
        name=${this.name}
        rows=${this.rows}
        aria-describedby=${this.hintId}
      ></textarea>
    `;
  }
}

customElements.define('govukwc-textarea', TextAreaComponent);
