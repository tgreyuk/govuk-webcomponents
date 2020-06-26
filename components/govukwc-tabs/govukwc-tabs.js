import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-tabs.styles';
import { Tabs } from './govukwc-tabs.script';
import './govukwc-tabs-panel';

export class TabsComponent extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      title: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  menuTemplate(items) {
    return `
      <ul class="govuk-tabs__list">
        ${items
          .map(
            (item) => `<li class="govuk-tabs__list-item">
              <a class="govuk-tabs__tab" href="#${item.id}">
                ${item.heading}
              </a>
            </li>`,
          )
          .join('')}
      </ul>
    `;
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    const onslotchange = () => {
      const nodes = Array.from(this.querySelectorAll('govukwc-tabs-panel'));
      const nodesData = nodes.map((node) => ({
        heading: node.heading,
        id: node.id,
      }));
      const slotNodes = nodes.map((node) => {
        const wrapper = document.createElement('div');
        const slotContent = node.shadowRoot.querySelector('slot');
        const slotContentNodes = slotContent.assignedElements();
        wrapper.innerHTML = node.shadowRoot.innerHTML;
        const wrapperNode = wrapper.firstElementChild;
        const wrapperSlot = wrapper.querySelector('slot');
        wrapperNode.removeChild(wrapperSlot);
        slotContentNodes.forEach((node) => {
          wrapperNode.append(node);
        });
        return wrapperNode;
      });
      const container = slot.parentNode;
      slot.removeEventListener('slotchange', onslotchange);
      container.removeChild(slot);
      const tempWrapper = document.createElement('div');
      tempWrapper.innerHTML = this.menuTemplate(nodesData);
      const menu = tempWrapper.firstElementChild;
      container.appendChild(menu);

      slotNodes.forEach((node) => container.appendChild(node));
      nodes.forEach((node) => {
        this.removeChild(node);
      });
      new Tabs(container).init();
    };
    slot.addEventListener('slotchange', onslotchange);
  }

  render() {
    return html`<div class="js-enabled  govuk-tabs" data-module="govuk-tabs">
      <h2 class="govuk-tabs__title">
        ${this.title}
      </h2>
      <slot></slot>
    </div>`;
  }
}

customElements.define('govukwc-tabs', TabsComponent);
