# govukwc-textarea

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/textarea/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/textarea/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-textarea/govukwc-textarea';
```

## API

## `<govukwc-textarea>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `value`|`string`|""|Field value
| `maxlength`|`number`|500|Maximum field length
| `rows`|`number`|5|Field rows
| `id`|`string`|""|Field id
| `name`|`string`|""|Field name
| `label`|`string`|""|Label text
| `hint`|`string`|""|Hint text
| `error`|`string`|""|Error  text
| `pageHeadingLabel`|`boolean`|false|Determines if the label should be treated as a page level h1
| `invalid`|`boolean`|false|Flag to define if field is in an invalid (error) state| 

### Events

| Name  |  Detail | Description |
|-------|---------|-------------|
| `govukwc:change` | - | Fires when on field 'change' event |
| `govukwc:keyup` | - | Fires when on field 'keyup' event |

