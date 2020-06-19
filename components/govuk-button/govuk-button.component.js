import { html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import componentStyles from './govuk-button.styles';
import { Button } from './govuk-button.script';

/**
 * https://design-system.service.gov.uk/components/button/
 *
 * @fires clicked - Fires when button has been clicked
 * @returns some stuff
 */

export class ButtonComponent extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      /**
       * If url is set the ement is rendered as an anchor element
       */
      url: { type: String },
      /**
       * @type {"start"\|"secondary"\|"warning"}
       */
      type: { type: String },
      disabled: { type: Boolean },
      preventDoubleClick: { type: Boolean },
      /**
       * @private
       */
      clicked: { attribute: false },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this.el = this.shadowRoot.querySelector('[data-module=govuk-button]');
    new Button(this.el).init();
  }

  /**
   * @private
   */
  handleClick() {
    if (this.preventDoubleClick && this.clicked) {
      return;
    }
    const event = new CustomEvent('clicked', {
      detail: {
        el: this.el,
      },
    });
    this.dispatchEvent(event);
    this.clicked = true;
  }

  /**
   * @private
   */
  iconTemplate() {
    if (this.type === 'start') {
      return html`<svg
        class="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>`;
    }
    return null;
  }

  render() {
    const classes = {
      ['govuk-button']: true,
      [`govuk-button--${this.type}`]: this.type,
    };

    return this.url
      ? html`<a
          href=${this.url}
          role="button"
          draggable="false"
          class=${classMap(classes)}
          data-module="govuk-button"
          ?disabled=${this.disabled}
          ?aria-disabled=${this.disabled}
          data-prevent-double-click=${this.preventDoubleClick}
          @click="${this.handleClick}"
        >
          ${this.label} ${this.iconTemplate()}
        </a>`
      : html`<button
          ?disabled=${this.disabled}
          ?aria-disabled=${this.disabled}
          class=${classMap(classes)}
          data-prevent-double-click=${this.preventDoubleClick}
          data-module="govuk-button"
          @click="${this.handleClick}"
        >
          ${this.label} ${this.iconTemplate()}
        </button>`;
  }
}

customElements.define('govuk-button', ButtonComponent);
