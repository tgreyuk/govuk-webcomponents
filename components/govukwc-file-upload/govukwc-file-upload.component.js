import { html, LitElement } from 'lit-element';
import componentStyles from './govukwc-file-upload.styles';

export class FileUploadComponent extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
    this.label = 'Upload a file';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div class="govuk-form-group">
      <label class="govuk-label" for=${this.id}>
        ${this.label}
      </label>
      <input
        class="govuk-file-upload"
        id=${this.id}
        name=${this.name}
        type="file"
      />
    </div>`;
  }
}

customElements.define('govukwc-file-upload', FileUploadComponent);
