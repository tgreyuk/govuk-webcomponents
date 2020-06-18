# Button

See: https://design-system.service.gov.uk/components/button/

## Usage

**Js**

```javascript
import 'govuk-webcomponents/components/govuk-button.component.js';
```


**Markup**

```markup
<govuk-button></govuk-button>
```


## govuk-button

https://design-system.service.gov.uk/components/button/

### Properties

| Property             | Attribute            | Type                                  | Description                                      |
|----------------------|----------------------|---------------------------------------|--------------------------------------------------|
| `disabled`           | `disabled`           | `boolean`                             |                                                  |
| `label`              | `label`              | `string`                              |                                                  |
| `preventDoubleClick` | `preventDoubleClick` | `boolean`                             |                                                  |
| `type`               | `type`               | `"start"  \\|"secondary"\\|"warning"` |                                                  |
| `url`                | `url`                | `string`                              | If url is set the ement is rendered as an anchor element |

### Events

| Event     | Description                        |
|-----------|------------------------------------|
| `clicked` | Fires when button has been clicked |
