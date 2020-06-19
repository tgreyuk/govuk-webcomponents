import { LitElement } from 'lit-element';
import componentStyles from './govuk-base.styles';

export class BaseElement extends LitElement {
  static get styles() {
    return [componentStyles];
  }

  replaceSlot(cb = null) {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes().filter((node) => !!node.tagName);
    setTimeout(() => {
      const slotHTML = nodes.map((node) => node.shadowRoot.innerHTML).join('');
      const container = slot.parentNode;
      container.innerHTML = slotHTML;
      if (cb) {
        cb(container);
      }
    }, 1);
  }
}
