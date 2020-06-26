import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import componentStyles from './govukwc-character-count.styles';
import { CharacterCount } from './govukwc-character-count.script';
import { TextAreaComponent } from '../govukwc-textarea/govukwc-textarea';

export class CharacterCountComponent extends TextAreaComponent {
  static get properties() {
    return {
      /**
       * Maximum word count (if applicable)
       */
      maxwords: { type: Number },
    };
  }

  static get styles() {
    return [super.styles, componentStyles];
  }

  constructor() {
    super();
    this.message = `You can enter up to ${this.maxlength} characters`;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  get infoId() {
    return `${this.id}-info`;
  }

  firstUpdated() {
    const characterCount = this.shadowRoot.querySelector(
      '[ data-module=govuk-character-count]',
    );
    new CharacterCount(characterCount).init();
  }

  renderControl() {
    return html`<div
      class="govuk-character-count"
      data-module="govuk-character-count"
      data-maxlength=${this.maxlength}
      data-maxwords=${ifDefined(this.maxwords)}
    >
      <textarea
        class="govuk-textarea govuk-js-character-count"
        id=${this.id}
        name=${this.name}
        rows=${this.rows}
        aria-describedby="${this.infoId}${this.hintId ? ' ' + this.hintId : ''}"
        maxlength=${this.maxlength}
      ></textarea>
      <span
        id=${this.infoId}
        class="govuk-hint govuk-character-count__message"
        aria-live="polite"
      >
        ${this.message}
      </span>
    </div> `;
  }
}

customElements.define('govukwc-character-count', CharacterCountComponent);
