import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-breadcrumbs.styles';
import { getSlotHTML } from '../../base/utils';
import './govukwc-breadcrumbs-item';

export class BreadcrumbsComponent extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
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

  async firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    const slotHTML = await getSlotHTML(slot);
    slot.parentNode.innerHTML = slotHTML;
  }
  render() {
    return html`<div class="govuk-breadcrumbs">
      <ol class="govuk-breadcrumbs__list">
        <slot></slot>
      </ol>
    </div>`;
  }
}

customElements.define('govukwc-breadcrumbs', BreadcrumbsComponent);
