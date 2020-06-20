import componentStyles from './govukwc-character-count.styles';
import { CharacterCount } from './govukwc-character-count.script';
import { TextAreaComponent } from '../govukwc-textarea/govukwc-textarea.component';

export class CharacterCountComponent extends TextAreaComponent {
  static get properties() {
    return {
      maxlength: { type: Number },
      maxwords: { type: Number },
    };
  }

  static get styles() {
    return [super.styles, componentStyles];
  }

  constructor() {
    super();
    this.maxlength = 200;
    this.message = `You can enter up to ${this.maxlength} characters`;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    const el = this.shadowRoot.firstElementChild;
    const textarea = this.shadowRoot.querySelector('textarea');
    textarea.setAttribute('class', 'govuk-textarea govuk-js-character-count');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'govuk-character-count');
    wrapper.setAttribute('data-module', 'govuk-character-count');
    wrapper.setAttribute('data-maxlength', this.maxlength);
    if (this.maxwords) {
      wrapper.setAttribute('data-maxwords', this.maxwords);
    }
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    new CharacterCount(wrapper).init();
  }
}

customElements.define('govukwc-character-count', CharacterCountComponent);
