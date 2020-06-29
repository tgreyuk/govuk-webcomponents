const propertiesTable = (properties) => {
  if (!properties) {
    return `### Attributes

    None
    `;
  }
  const props = ['name', 'type', 'default', 'description'];
  const setProp = (properties, prop) => {
    if (prop === 'name' || prop === 'type') {
      return '`' + properties[prop] + '`';
    }
    return properties[prop];
  };
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
          .map((prop) => (properties[prop] ? setProp(properties, prop) : '""'))
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

| Name  |  Detail | Description |
|-------|---------|-------------|
${events
  .map((event) => {
    let detail;
    let description = event.description;
    if (event.description) {
      const eventData = event.description.split('\n');
      if (eventData.length > 1) {
        detail = eventData[0];
        description = eventData[1];
      }
    }
    return `| \`${event.name}\` | ${detail ? ` \`${detail}\` ` : '-'} | ${
      description ? description.replace(/\n/g, '<br />') : '-'
    } |`;
  })
  .join('\n')}`;
};

module.exports = {
  propertiesTable,
  slotsTable,
  eventsTable,
};
