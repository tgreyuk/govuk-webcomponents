import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-accordion.styles';
import { Accordion } from './govukwc-accordion.script';
import './govukwc-accordion-section.component';
import { replaceSlot } from '../utils';

/**
 * @slot Default - Accepts x number of govuk-accordion-section elements
 */

export class AccordionComponent extends LitElement {
  static get properties() {
    return {
      id: { type: String },
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

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    replaceSlot(slot, (accordion) => {
      new Accordion(accordion).init();
    });
  }

  render() {
    return html`<div class="js-enabled">
      <div class="govuk-accordion" data-module="govuk-accordion" id=${this.id}>
        <slot></slot>
      </div>
    </div>`;
  }
}

customElements.define('govukwc-accordion', AccordionComponent);
