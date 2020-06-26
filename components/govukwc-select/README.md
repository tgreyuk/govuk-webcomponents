# govukwc-select

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/select/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/select/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-select/govukwc-select';
```

## API

## `<govukwc-select>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `id`|`string`|""|Field id
| `name`|`string`|""|Field name
| `label`|`string`|""|Label text
| `hint`|`string`|""|Hint text
| `error`|`string`|""|Error  text
| `pageHeadingLabel`|`boolean`|""|Determines if the label should be treated as a page level h1
| `invalid`|`boolean`|""|Flag to define if field is in an invalid (error) state| 

## `<govukwc-select-option>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `label`|`string`|""|""
| `value`|`string`|""|""| 

