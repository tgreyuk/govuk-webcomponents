# `govukwc-character-count`

#### `should render character count`

```html
<div class="govuk-form-group">
  <label
    class="govuk-label"
    for="char-count-length"
  >
    Can you provide more detail?
  </label>
  <span
    class="govuk-hint"
    id="char-count-length-hint"
  >
    Do not include personal or financial information like your National Insurance number or credit card details.
  </span>
  <div
    class="govuk-character-count"
    data-maxlength="500"
    data-module="govuk-character-count"
  >
    <textarea
      aria-describedby="char-count-length-info char-count-length-hint"
      class="govuk-js-character-count govuk-textarea"
      id="char-count-length"
      maxlength="500"
      name="char-count-length"
      rows="5"
    >
    </textarea>
    <span
      aria-live="polite"
      class="govuk-character-count__message govuk-hint"
      id="char-count-length-info"
    >
      You have 500 characters remaining
    </span>
  </div>
</div>

```

#### `should render word count`

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label
      class="govuk-label govuk-label--l"
      for="char-count-words"
    >
      Describe the nature of your event
    </label>
  </h1>
  <div
    class="govuk-character-count"
    data-maxlength="500"
    data-maxwords="50"
    data-module="govuk-character-count"
  >
    <textarea
      aria-describedby="char-count-words-info"
      class="govuk-js-character-count govuk-textarea"
      id="char-count-words"
      maxlength="500"
      name="char-count-words"
      rows="5"
    >
    </textarea>
    <span
      aria-live="polite"
      class="govuk-character-count__message govuk-hint"
      id="char-count-words-info"
    >
      You have 50 words remaining
    </span>
  </div>
</div>

```

