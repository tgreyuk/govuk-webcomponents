# govukwc-text-input

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/text-input/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/text-input/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-text-input/govukwc-text-input';
```

## API

## `<govukwc-text-input>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `value`|`string`|""|Input value
| `width`|`string`|"20"|Field width setting - one of `"20"` `"10"` `"5"` `"4"` `"3"` `"2"` `"full"` `"three-quarters"` `"two-thirds"` `"one-half"` `"one-third"` `"one-quarter"`
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

