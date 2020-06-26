import { html, LitElement } from 'lit-element';
import coreStyles from '../../base/styles/core.styles';
import componentStyles from './govukwc-accordion.styles';
import { Accordion } from './govukwc-accordion.script';
import { getSlotHTML } from '../../base/utils';
import './govukwc-accordion-section';

/**
 * @slot default - Collection of <govuk-accordion-section> elements
 */

export class AccordionComponent extends LitElement {
  static get properties() {
    return {
      /**
       * A unique id to describe the accordion
       */
      id: { type: String },
    };
  }

  static get styles() {
    return [coreStyles, componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async firstUpdated() {
    const accordion = this.shadowRoot.firstElementChild;
    const slot = this.shadowRoot.querySelector('slot');
    const slotHTML = await getSlotHTML(slot);
    accordion.innerHTML = slotHTML;
    new Accordion(accordion).init();
    return;
  }

  render() {
    return html`<div class="js-enabled govuk-accordion" id=${this.id}>
      <slot></slot>
    </div>`;
  }
}

customElements.define('govukwc-accordion', AccordionComponent);
