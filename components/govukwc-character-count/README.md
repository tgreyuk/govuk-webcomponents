# govukwc-character-count

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/character-count/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/character-count/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-character-count/govukwc-character-count';
```

## API

## `<govukwc-character-count>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `maxwords`|`number`|""|Maximum word count (if applicable)
| `maxlength`|`number`|500|Maximum field length
| `rows`|`number`|5|Textarea rows
| `id`|`string`|""|Field id
| `name`|`string`|""|Field name
| `label`|`string`|""|Label text
| `hint`|`string`|""|Hint text
| `error`|`string`|""|Error  text
| `pageHeadingLabel`|`boolean`|""|Determines if the label should be treated as a page level h1
| `invalid`|`boolean`|""|Flag to define if field is in an invalid (error) state| 

