import { html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { classMap } from 'lit-html/directives/class-map';
import componentStyles from './govukwc-radios.styles';
import { FieldsetComponent } from '../govukwc-fieldset/govukwc-fieldset';
import { getSlotHTML } from '../../base/utils';
import './govukwc-radio';

export class RadiosComponent extends FieldsetComponent {
  static get properties() {
    return {
      /**
       * Flag to display inline radios
       */
      inline: { type: Boolean },
    };
  }
  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
    this.inline = false;
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
    const formGroupClasses = {
      'govuk-form-group': true,
      'govuk-form-group--error': this.invalid,
    };
    const radioClasses = {
      'js-enabled': true,
      'govuk-radios': true,
      'govuk-radios--inline': this.inline,
    };
    return html`<div class=${classMap(formGroupClasses)}>
      <fieldset
        class="govuk-fieldset"
        aria-describedby="${ifDefined(
          this.describedByIds.length > 0 ? this.describedByIds : '',
        )}"
      >
        ${this.legendTemplate(this.small ? 'm' : 'l')} ${this.hintTemplate()}
        ${this.errorTemplate()}
        <div class=${classMap(radioClasses)}>
          <slot></slot>
        </div>
      </fieldset>
    </div>`;
  }
}

customElements.define('govukwc-radios', RadiosComponent);
