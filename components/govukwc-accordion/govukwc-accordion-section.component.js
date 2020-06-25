import { html, LitElement } from 'lit-element';

/**
 * @slot default - Accordion body content
 */
export class AccordionSectionComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Heading / toggle text
       */
      heading: { type: String },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.id = this.parentNode.getAttribute('id');
  }

  render() {
    const headingId = `${this.id}-heading`;
    const contentId = `${this.id}-content`;
    return html`<div class="govuk-accordion__section">
      <div class="govuk-accordion__section-header">
        <h2 class="govuk-accordion__section-heading">
          <span class="govuk-accordion__section-button">
            ${this.heading}
          </span>
        </h2>
      </div>
      <div
        id=${contentId}
        class="govuk-accordion__section-content"
        aria-labelledby=${headingId}
      >
        <slot></slot>
      </div>
    </div>`;
  }
}

customElements.define('govukwc-accordion-section', AccordionSectionComponent);
