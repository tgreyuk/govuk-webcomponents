# govukwc-error-summary

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/error-summary/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/error-summary/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-error-summary/govukwc-error-summary';
```

## API

## `<govukwc-error-summary>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `title`|`string`|""|Error summary title| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `Default` | `Messages` |

## `<govukwc-error-summary-item>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `target`|`string`|""|The target id of invalid component
| `message`|`string`|""|Associated error message| 

