# govukwc-radios

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/radios/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/radios/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-radios/govukwc-radios';
```

## API

## `<govukwc-radios>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `inline`|`boolean`|false|Flag to display inline radios
| `legend`|`string`|""|Fieldset legend
| `hint`|`string`|""|Fieldset hint
| `invalid`|`boolean`|""|Flag to determine if is invalid (in error state)
| `error`|`string`|""|Error text
| `pageHeadingLegend`|`boolean`|false|Wheter to render the legend in an h1| 

## `<govukwc-radio>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `id`|`string`|""|Radio id
| `name`|`string`|""|Radio name
| `label`|`string`|""|Radio label
| `value`|`string`|""|Radio value
| `hint`|`string`|""|Radio hint text| 

