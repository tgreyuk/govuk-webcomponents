const propertiesTable = (properties) => {
  if (!properties) {
    return `### Attributes

    None
    `;
  }
  const props = ['name', 'type', 'default', 'description'];
  return `
### Attributes

| Property  |  Type     | Default | Description |
|-----------|-----------|---------|-------------|
${
  properties
    .map(
      (properties) =>
        '| ' +
        props
          .map((prop) => (properties[prop] ? properties[prop] : '""'))
          .join(`|`),
    )
    .join('\n') + '| '
}`;
};

const slotsTable = (slots) => {
  if (!slots) {
    return '';
  }
  return `
### Slots

| Name  |  Description     |
|-----------|-----------|
${slots
  .map((slot) => `| \`${slot.name}\` | \`${slot.description}\` |`)
  .join('\n')}`;
};

const eventsTable = (events) => {
  if (!events) {
    return '';
  }
  return `
### Events

| Name  |  Description     |
|-----------|-----------|
${events
  .map((event) => `| \`${event.name}\` | \`${event.description}\` |`)
  .join('\n')}`;
};

module.exports = {
  propertiesTable,
  slotsTable,
  eventsTable,
};
