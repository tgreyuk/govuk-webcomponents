import { html, LitElement } from 'lit-element';
import componentStyles from './govuk-date-input.styles';

export class DateInputComponent extends LitElement {
  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div class="govuk-form-group">
      <fieldset
        class="govuk-fieldset"
        role="group"
        aria-describedby="passport-issued-hint"
      >
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
          <h1 class="govuk-fieldset__heading">
            When was your passport issued?
          </h1>
        </legend>
        <span id="passport-issued-hint" class="govuk-hint">
          For example, 12 11 2007
        </span>
        <div class="govuk-date-input" id="passport-issued">
          <div class="govuk-date-input__item">
            <div class="govuk-form-group">
              <label
                class="govuk-label govuk-date-input__label"
                for="passport-issued-day"
              >
                Day
              </label>
              <input
                class="govuk-input govuk-date-input__input govuk-input--width-2"
                id="passport-issued-day"
                name="passport-issued-day"
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
              />
            </div>
          </div>
          <div class="govuk-date-input__item">
            <div class="govuk-form-group">
              <label
                class="govuk-label govuk-date-input__label"
                for="passport-issued-month"
              >
                Month
              </label>
              <input
                class="govuk-input govuk-date-input__input govuk-input--width-2"
                id="passport-issued-month"
                name="passport-issued-month"
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
              />
            </div>
          </div>
          <div class="govuk-date-input__item">
            <div class="govuk-form-group">
              <label
                class="govuk-label govuk-date-input__label"
                for="passport-issued-year"
              >
                Year
              </label>
              <input
                class="govuk-input govuk-date-input__input govuk-input--width-4"
                id="passport-issued-year"
                name="passport-issued-year"
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>`;
  }
}

customElements.define('govuk-date-input', DateInputComponent);
