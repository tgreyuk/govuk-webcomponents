# govukwc-checkboxes

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/checkboxes/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/checkboxes/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-checkboxes/govukwc-checkboxes';
```

## API

## `<govukwc-checkboxes>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `small`|`boolean`|""|Flag to display small checkboxes
| `legend`|`string`|""|Fieldset legend
| `hint`|`string`|""|Fieldset hint
| `invalid`|`boolean`|""|Flag to determine if is invalid (in error state)
| `error`|`string`|""|Error text
| `pageHeadingLegend`|`boolean`|false|Wheter to render the legend in an h1| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `default` | `Collection of <govukwc-checkbox> elements` |

### Events

| Name  |  Detail | Description |
|-------|---------|-------------|
| `govukwc:change` |  `Object containing checkbox collection details`  | Fires with any change in the checkbox collection (including conditional inputs) |

## `<govukwc-checkbox>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `id`|`string`|""|Checkbox id
| `name`|`string`|""|Checkbox name
| `label`|`string`|""|Checkbox label text
| `value`|`string`|""|Checkbox value
| `hint`|`string`|""|Checkbox hint text
| `checked`|`boolean`|false|Flag to set checked state| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `default` | `Conditional toggle content` |

