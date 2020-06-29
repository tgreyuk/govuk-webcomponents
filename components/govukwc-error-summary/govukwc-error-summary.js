import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-error-summary.styles';
import { getSlotHTML } from '../../base/utils';
import { ErrorSummary } from './govukwc-error-summary.script';
import './govukwc-error-summary-item';

/**
 * @slot Default - Messages
 */

export class ErrorSummaryComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Error summary title
       */
      title: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();

    ErrorSummary.prototype.focusTarget = function ($target) {
      if ($target.tagName !== 'A' || $target.href === false) {
        return false;
      }

      const inputId = this.getFragmentFromUrl($target.href);

      const component = document.getElementById(inputId);

      const $input = component.shadowRoot.querySelector(
        'input,select,textarea',
      );

      if (!$input) {
        return false;
      }

      const $legendOrLabel = component.shadowRoot.querySelector('legend,label');

      if (!$legendOrLabel) {
        return false;
      }

      component.scrollIntoView();
      $input.focus({ preventScroll: true });
      return true;
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.title = 'There is a problem';
  }

  async firstUpdated() {
    const errorSummary = this.shadowRoot.querySelector(
      '[data-module=govuk-error-summary]',
    );
    const slot = this.shadowRoot.querySelector('slot');
    const slotHTML = await getSlotHTML(slot);
    slot.parentNode.innerHTML = slotHTML;
    new ErrorSummary(errorSummary).init();
  }

  render() {
    return html`<div
      class="govuk-error-summary"
      aria-labelledby="error-summary-title"
      role="alert"
      tabindex="-1"
      data-module="govuk-error-summary"
    >
      <h2 class="govuk-error-summary__title" id="error-summary-title">
        ${this.title}
      </h2>
      <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <slot></slot>
        </ul>
      </div>
    </div>`;
  }
}

customElements.define('govukwc-error-summary', ErrorSummaryComponent);
