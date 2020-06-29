import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import utilitiesStyles from '../../base/styles/utilities.styles';
import componentStyles from './govukwc-checkboxes.styles';
import formGroupStyles from '../../base/form-group/form-group.styles';
import { FieldsetComponent } from '../govukwc-fieldset/govukwc-fieldset';
import { getSlotHTML } from '../../base/utils';
import { Checkboxes } from './govukwc-checkboxes.script';
import './govukwc-checkbox';

/**
 * @slot default - Collection of <govukwc-checkbox> elements
 *
 * @fires govukwc:change - Object containing checkbox collection details
 * Fires with any change in the checkbox collection (including conditional inputs)
 */

export class CheckboxesComponent extends FieldsetComponent {
  static get properties() {
    return {
      /**
       * Flag to display small checkboxes
       */
      small: { type: Boolean },
    };
  }
  static get styles() {
    return [utilitiesStyles, formGroupStyles, componentStyles];
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
    const checkboxesWrapper = slot.parentNode;
    checkboxesWrapper.innerHTML = slotHTML;
    this.checkboxes = Array.from(
      checkboxesWrapper.querySelectorAll('input[type=checkbox]'),
    );
    this.setState(checkboxesWrapper);
    this.setEvents(checkboxesWrapper);
    new Checkboxes(checkboxesWrapper).init();
    return;
  }

  setState() {
    this.state = {};
    this.checkboxes.forEach((checkbox) => this.updateState(checkbox));
  }

  updateState(checkbox, conditionalInputValue = null) {
    const id = checkbox.getAttribute('id');
    const value = checkbox.getAttribute('value');
    const checked = checkbox.checked;
    this.state[id] = {
      value,
      checked,
      ...(conditionalInputValue && { conditionalInputValue }),
    };
  }

  setEvents() {
    this.checkboxes.forEach((checkbox) => {
      const conditionalInput = checkbox.parentNode.nextElementSibling
        ? checkbox.parentNode.nextElementSibling.querySelector(
            'govukwc-text-input',
          )
        : null;
      if (conditionalInput) {
        conditionalInput.addEventListener('govukwc:keyup', (e) => {
          this.updateState(checkbox, e.detail.value);
          this.dispatchChangeEvent();
        });
      }
      checkbox.addEventListener('change', () => {
        this.updateState(checkbox);
        this.dispatchChangeEvent();
      });
    });
  }

  dispatchChangeEvent() {
    const event = new CustomEvent('govukwc:change', {
      detail: {
        checkboxes: this.state,
      },
    });
    this.dispatchEvent(event);
  }

  get errorId() {}

  render() {
    const formGroupClasses = {
      'govuk-form-group': true,
      'govuk-form-group--error': this.invalid,
    };
    const checkboxClasses = {
      'js-enabled': true,
      'govuk-checkboxes': true,
      'govuk-checkboxes--small': this.small,
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
        <div class=${classMap(checkboxClasses)}>
          <slot></slot>
        </div>
      </fieldset>
    </div>`;
  }
}

customElements.define('govukwc-checkboxes', CheckboxesComponent);
