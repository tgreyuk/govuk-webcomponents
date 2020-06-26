import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-breadcrumbs.styles';

export class BreadcrumbsItemComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Breadcrumb url
       */
      url: { type: String },
      /**
       * Breadcrumb label
       */
      label: { type: String },
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

  render() {
    return html`<li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href=${this.url}>${this.label}</a>
    </li>`;
  }
}

customElements.define('govukwc-breadcrumbs-item', BreadcrumbsItemComponent);
