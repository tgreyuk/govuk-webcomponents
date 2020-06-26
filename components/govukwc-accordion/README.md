# govukwc-accordion

- [Reference docs at GOV.UK](https://design-system.service.gov.uk/components/accordion/)
- [Storybook demo and code samples](http://tgreyuk.github.io/govuk-webcomponents/storybook/?path=/story/accordion/)

## Usage

```javascript
import 'govukwc-webcomponents/components/govukwc-accordion/govukwc-accordion';
```

## API

## `<govukwc-accordion>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| id|string|""|A unique id to describe the accordion| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `default` | `Collection of <govuk-accordion-section> elements` |

## `<govukwc-accordion-section>`

### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
| heading|string|""|Heading / toggle text| 

### Slots

| Name  |  Description     |
|-----------|-----------|
| `default` | `Accordion body content` |

