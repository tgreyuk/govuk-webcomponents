# gov-uk-button

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/button/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/button/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-button/govukwc-button';
```

## API

## `<govukwc-button>`

### Properties

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| label|string|""|""
| url|string|""|If url is set the ement is rendered as an anchor element
| type|"start"  \|"secondary"\|"warning"|""|""
| disabled|boolean|""|""
| preventDoubleClick|boolean|""|""| 

### Events

| Name  |  Description     |
|-----------|-----------|
| `clicked` | `Fires when button has been clicked` |

