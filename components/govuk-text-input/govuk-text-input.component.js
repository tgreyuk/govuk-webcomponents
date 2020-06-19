import { html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { classMap } from 'lit-html/directives/class-map';
import componentStyles from './govuk-text-input.styles';
import { FormGroup } from '../govuk-form-group/govuk-form-group';

/**
 * https://design-system.service.gov.uk/components/text-input/
 */

export class TextInputComponent extends FormGroup {
  static get properties() {
    return {
      /**
       * @type {"20"\|"10"\|"5"\|"4"\|"3"\|"2"\|"full"\|"three-quarters"\|"two-thirds"\|"one-half"\|"one-third"\|"one-quarter"}
       */
      width: { type: String },
    };
  }

  static get styles() {
    return [super.styles, componentStyles];
  }

  constructor() {
    super();
    this.width = '20';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  renderControl() {
    const fixedWidths = ['20', '10', '5', '4', '3', '2'];
    const classes = {
      ['govuk-input']: true,
      [`govuk-input--width-${this.width}`]: fixedWidths.includes(this.width),
      [`govuk-!-width-${this.width}`]: !fixedWidths.includes(this.width),
    };
    return html`<input
      class=${classMap(classes)}
      id=${this.id}
      name=${this.name}
      type="text"
      aria-describedby=${ifDefined(this.hintId)}
    />`;
  }
}

customElements.define('govuk-text-input', TextInputComponent);