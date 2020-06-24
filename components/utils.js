export const replaceSlot = (slot, cb = null) => {
  const nodes = slot.assignedNodes().filter((node) => !!node.tagName);
  setTimeout(() => {
    const slotHTML = nodes
      .map((node) => {
        const nodeSlot = node.shadowRoot.querySelector('slot');
        if (nodeSlot) {
          const slotHtml = nodeSlot
            .assignedNodes()
            .map((node) => {
              if (node.nodeValue) {
                return node.nodeValue;
              } else {
                return node.outerHTML;
              }
            })
            .join('');
          return node.shadowRoot.innerHTML.replace('<slot></slot>', slotHtml);
        }
        return node.shadowRoot.innerHTML;
      })
      .join('');
    const container = slot.parentNode;
    container.innerHTML = slotHTML;
    if (cb) {
      cb(container);
    }
  }, 1);
};

export const wrapEl = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

export const replaceElement = (element, cb = null) => {
  setTimeout(() => {
    const elementHTML = element.shadowRoot.innerHTML;
    const container = element.parentNode;
    container.innerHTML = elementHTML;
    if (cb) {
      cb(container);
    }
  }, 1);
};
