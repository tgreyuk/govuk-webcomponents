# govukwc-summary-list

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/summary-list/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/summary-list/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-summary-list/govukwc-summary-list';
```

## API

## `<govukwc-summary-list>`

### Attributes

    None
    

### Slots

| Name  |  Description     |
|-----------|-----------|
| `Default` | `x number of summary-list-row components` |

### Events

| Name  |  Description     |
|-----------|-----------|
| `clicked` | Fires when action has been clicked |

## `<govukwc-summary-list-row>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `key`|`string`|""|""
| `value`|`string`|""|""
| `action`|`string`|""|""| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `Default` | `summary value` |

