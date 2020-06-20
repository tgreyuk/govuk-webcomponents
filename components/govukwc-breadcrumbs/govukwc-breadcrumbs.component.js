import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-breadcrumbs.styles';
import './govukwc-breadcrumbs-item.component';
import { replaceSlot } from '../utils';

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

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    replaceSlot(slot);
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
