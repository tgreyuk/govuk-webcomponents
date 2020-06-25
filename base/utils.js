export const getSlotHTML = (slot) =>
  new Promise((resolve) => {
    const onslotchange = () => {
      const nodes = slot.assignedNodes().filter((node) => !!node.tagName);
      const slotHTML = nodes
        .map((node) => {
          const nodeSlot = node.shadowRoot.querySelector('slot');
          if (nodeSlot) {
            const nodeSlotHtml = nodeSlot
              .assignedNodes()
              .map((node) => {
                if (node.nodeValue) {
                  return node.nodeValue;
                } else {
                  return node.outerHTML;
                }
              })
              .join('');
            return node.shadowRoot.innerHTML.replace(
              /<slot.*>(.|\n)*<\/slot>/g,
              nodeSlotHtml,
            );
          }
          return node.shadowRoot.innerHTML;
        })
        .join('');
      slot.removeEventListener('slotchange', onslotchange);
      resolve(slotHTML);
    };
    slot.addEventListener('slotchange', onslotchange);
  });

export const wrapEl = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};
