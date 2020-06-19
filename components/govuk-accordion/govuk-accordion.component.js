import { html, LitElement } from 'lit-element';
import componentStyles from './govuk-accordion.styles';
import { Accordion } from './govuk-accordion.script';
import './govuk-accordion-section.component';
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
    replaceSlot(this.shadowRoot, (accordion) => {
      new Accordion(accordion).init();
    });
  }

  render() {
    return html`<div
      class="js-enabled govuk-accordion"
      data-module="govuk-accordion"
      id=${this.id}
    >
      <slot></slot>
    </div>`;
  }
}

customElements.define('govuk-accordion', AccordionComponent);
