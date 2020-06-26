# govukwc-button

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/button/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/button/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-button/govukwc-button';
```

## API

## `<govukwc-button>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| `label`|`string`|""|Button label
| `url`|`string`|""|Button url (if url is set the element is rendered as an anchor element)
| `type`|`string`|""|Button type - one of `start`|`secondary`|`warning`
| `disabled`|`boolean`|""|Button is in an html disabled state
| `preventDoubleClick`|`boolean`|""|Disables event firing after first click| 

### Events

| Name  |  Description     |
|-----------|-----------|
| `clicked` | Fires when button has been clicked and returns the button el in the details object |

