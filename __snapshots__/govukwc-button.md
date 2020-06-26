# `govukwc-button`

#### `should render`

```html
<button class="govuk-button">
  Save and continue
</button>

```

#### `should set url and return anchor element`

```html
<a
  class="govuk-button govuk-button--start"
  draggable="false"
  href="https://www.gov.uk/"
  role="button"
>
  Start now
</a>

```

#### `should render disabled`

```html
<button
  aria-disabled=""
  class="govuk-button"
  disabled=""
>
  Disabled button
</button>

```

#### `should render preventDoubleClick data attr`

```html
<button
  class="govuk-button"
  data-prevent-double-click=""
>
  Confirm and send
</button>

```

