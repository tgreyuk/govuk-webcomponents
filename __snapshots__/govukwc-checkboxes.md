# `govukwc-checkboxes`

#### `should render`

```html
<div class="govuk-form-group">
  <fieldset
    aria-describedby=""
    class="govuk-fieldset"
  >
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Which types of waste do you transport?
      </h1>
    </legend>
    <span class="govuk-hint">
      Select all that apply.
    </span>
    <div class="govuk-checkboxes js-enabled">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="waste"
          name="waste"
          type="checkbox"
          value="carcasses"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="waste"
        >
          Waste from animal carcasses
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="waste-2"
          name="waste-2"
          type="checkbox"
          value="mines"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="waste-2"
        >
          Waste from mines or quarries
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="waste-3"
          name="waste-3"
          type="checkbox"
          value="farm"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="waste-3"
        >
          Farm or agricultural waste
        </label>
      </div>
    </div>
  </fieldset>
</div>

```

#### `should render with conditional inputs`

```html
<div class="govuk-form-group">
  <fieldset
    aria-describedby=""
    class="govuk-fieldset"
  >
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      How would you like to be contacted?
    </legend>
    <span class="govuk-hint">
      Select all options that are relevant to you.
    </span>
    <div class="govuk-checkboxes js-enabled">
      <div class="govuk-checkboxes__item">
        <input
          aria-controls="contact-email-conditional"
          aria-expanded="true"
          checked=""
          class="govuk-checkboxes__input"
          id="contact-email"
          name="contact-email"
          type="checkbox"
          value="email"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="contact-email"
        >
          Email
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional"
        id="contact-email-conditional"
      >
        <govukwc-text-input
          id="contact-email-conditional"
          label="Email address"
          name="contact-email-conditional"
        >
        </govukwc-text-input>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          aria-controls="contact-phone-conditional"
          aria-expanded="false"
          class="govuk-checkboxes__input"
          id="contact-phone"
          name="contact-phone"
          type="checkbox"
          value="phone"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="contact-phone"
        >
          Phone
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="contact-phone-conditional"
      >
        <govukwc-text-input
          id="contact-phone-conditional"
          label="Phone number"
          name="contact-phone-conditional"
        >
        </govukwc-text-input>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          aria-controls="contact-text-conditional"
          aria-expanded="false"
          class="govuk-checkboxes__input"
          id="contact-text"
          name="contact-text"
          type="checkbox"
          value="text"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="contact-text"
        >
          Text message
        </label>
      </div>
      <div
        class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id="contact-text-conditional"
      >
        <govukwc-text-input
          id="contact-text-conditional"
          label="Mobile phone number"
          name="contact-text-conditional"
        >
        </govukwc-text-input>
      </div>
    </div>
  </fieldset>
</div>

```

#### `should render small`

```html
<div class="govuk-form-group">
  <fieldset
    aria-describedby=""
    class="govuk-fieldset"
  >
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      Organisation
    </legend>
    <div class="govuk-checkboxes govuk-checkboxes--small js-enabled">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="org-hmrc"
          name="org-hmrc"
          type="checkbox"
          value="hmrc"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="org-hmrc"
        >
          HM Revenue and Customs (HMRC)
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="org-employment-tribunal"
          name="org-employment-tribunal"
          type="checkbox"
          value="employment-tribunal"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="org-employment-tribunal"
        >
          Employment Tribunal
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="org-mod"
          name="org-mod"
          type="checkbox"
          value="mod"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="org-mod"
        >
          Ministry of Defence
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="org-dep-of-transport"
          name="org-dep-of-transport"
          type="checkbox"
          value="dep-of-transport"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="org-dep-of-transport"
        >
          Department for Transport
        </label>
      </div>
    </div>
  </fieldset>
</div>

```

#### `should render error`

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset
    aria-describedby=" "
    class="govuk-fieldset"
  >
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      What is your nationality?
    </legend>
    <span class="govuk-hint">
      If you have dual nationality, select all options that are relevant to you.
    </span>
    <span
      class="govuk-error-message"
      id="undefined"
    >
      <span class="govuk-visually-hidden">
        Error:
      </span>
      Select if you are British, Irish or a citizen of a different country
    </span>
    <div class="govuk-checkboxes js-enabled">
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="nationality-british"
          name="nationality-british"
          type="checkbox"
          value="british"
        >
        <label
          aria-describedby="nationality-british-hint"
          class="govuk-checkboxes__label govuk-label"
          for="nationality-british"
        >
          British
        </label>
        <span
          class="govuk-checkboxes__hint govuk-hint"
          id="nationality-british-hint"
        >
          including English, Scottish, Welsh and Northern Irish
        </span>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="nationality-irish"
          name="nationality-irish"
          type="checkbox"
          value="Irish"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="nationality-irish"
        >
          Irish
        </label>
      </div>
      <div class="govuk-checkboxes__item">
        <input
          class="govuk-checkboxes__input"
          data-aria-controls=""
          id="nationality-other"
          name="nationality-other"
          type="checkbox"
          value="other"
        >
        <label
          aria-describedby=""
          class="govuk-checkboxes__label govuk-label"
          for="nationality-other"
        >
          Citizen of another country
        </label>
      </div>
    </div>
  </fieldset>
</div>

```

