# gov-uk-accordion

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/accordion/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/accordion/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-accordion.component.js';
```

## API

## `<govukwc-accordion>`

### Properties

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| id|string|""|A unique id to describe the accordion| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `default` | `Accepts x number of <govuk-accordion-section> elements` |

## `<govukwc-accordion-section>`

### Properties

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| heading|string|""|Heading / toggle text| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `default` | `Accordion body content` |

