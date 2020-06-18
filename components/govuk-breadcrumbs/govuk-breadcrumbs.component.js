import { html } from 'lit-element';
import componentStyles from './govuk-breadcrumbs.styles';
import { BaseElement } from '../govuk-base/govuk-base';
import './govuk-breadcrumbs.component.item';

export class BreadcrumbsComponent extends BaseElement {
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
    this.replaceSlot();
  }
  render() {
    return html`<div class="govuk-breadcrumbs">
      <ol class="govuk-breadcrumbs__list">
        <slot></slot>
      </ol>
    </div>`;
  }
}

customElements.define('govuk-breadcrumbs', BreadcrumbsComponent);
