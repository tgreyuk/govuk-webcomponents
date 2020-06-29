import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-date-input.styles';
import fieldsetStyles from '../govukwc-fieldset/govukwc-fieldset.styles';
import formGroupStyles from '../../base/form-group/form-group.styles';
import '../govukwc-fieldset/govukwc-fieldset';
import '../govukwc-text-input/govukwc-text-input';

/**
 * @fires govukwc:change - {day, month, year}
 * Fires when on field 'change' event
 * @fires govukwc:keyup - {day, month, year}
 * Fires when on field 'keyup' event
 */

export class DateInputComponent extends LitElement {
  static get styles() {
    return [formGroupStyles, fieldsetStyles, componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this.dayControl = this.shadowRoot.querySelector('#passport-issued-day');
    this.monthControl = this.shadowRoot.querySelector('#passport-issued-month');
    this.yearControl = this.shadowRoot.querySelector('#passport-issued-year');
  }

  handleChange() {
    this.handleEvent('govukwc:change');
  }

  handleKeyup() {
    this.handleEvent('govukwc:keyup');
  }

  handleEvent(eventName) {
    const event = new CustomEvent(eventName, {
      detail: {
        day: this.dayControl.value,
        month: this.monthControl.value,
        year: this.yearControl.value,
      },
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`<div class="govuk-form-group">
      <govukwc-fieldset
        pageHeadingLegend
        legend="When was your passport issued?"
        hint="For example, 12 11 2007"
      >
        <div class="govuk-date-input" id="passport-issued">
          <div class="govuk-date-input__item">
            <govukwc-text-input
              number
              id="passport-issued-day"
              name="passport-issued-day"
              label="Day"
              width="2"
              @govukwc:change=${this.handleChange}
              @govukwc:keyup=${this.handleKeyup}
            ></govukwc-text-input>
          </div>
          <div class="govuk-date-input__item">
            <govukwc-text-input
              number
              id="passport-issued-month"
              name="passport-issued-month"
              label="Month"
              width="2"
              @govukwc:change=${this.handleChange}
              @govukwc:keyup=${this.handleKeyup}
            ></govukwc-text-input>
          </div>
          <div class="govuk-date-input__item">
            <govukwc-text-input
              number
              id="passport-issued-year"
              name="passport-issued-year"
              label="Year"
              width="4"
              @govukwc:change=${this.handleChange}
              @govukwc:keyup=${this.handleKeyup}
            ></govukwc-text-input>
          </div>
        </div>
      </govukwc-fieldset>
    </div>`;
  }
}

customElements.define('govukwc-date-input', DateInputComponent);
