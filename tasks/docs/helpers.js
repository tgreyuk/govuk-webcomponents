const propertiesTable = (properties) => {
  if (!properties) {
    return '';
  }
  return `
### Properties

| Property  |  Type     |
|-----------|-----------|
${properties
  .map((properties) => `| \`${properties.name}\` | \`${properties.type}\` |`)
  .join('\n')}`;
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
