# `govukwc-date-input`

#### `should render`

```html
<div class="govuk-form-group">
  <govukwc-fieldset
    hint="For example, 12 11 2007"
    legend="When was your passport issued?"
    pageheadinglegend=""
  >
    <div
      class="govuk-date-input"
      id="passport-issued"
    >
      <div class="govuk-date-input__item">
        <govukwc-text-input
          id="passport-issued-day"
          label="Day"
          name="passport-issued-day"
          number=""
          width="2"
        >
        </govukwc-text-input>
      </div>
      <div class="govuk-date-input__item">
        <govukwc-text-input
          id="passport-issued-month"
          label="Month"
          name="passport-issued-month"
          number=""
          width="2"
        >
        </govukwc-text-input>
      </div>
      <div class="govuk-date-input__item">
        <govukwc-text-input
          id="passport-issued-year"
          label="Year"
          name="passport-issued-year"
          number=""
          width="4"
        >
        </govukwc-text-input>
      </div>
    </div>
  </govukwc-fieldset>
</div>

```

