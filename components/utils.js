export const replaceSlot = (shadowRoot, cb = null) => {
  const slot = shadowRoot.querySelector('slot');
  const nodes = slot.assignedNodes().filter((node) => !!node.tagName);
  setTimeout(() => {
    const slotHTML = nodes.map((node) => node.shadowRoot.innerHTML).join('');
    const container = slot.parentNode;
    container.innerHTML = slotHTML;
    if (cb) {
      cb(container);
    }
  }, 1);
};
