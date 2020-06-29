export const storyEvents = (story, cb) => {
  if (story.startsWith('back-link')) {
    const backlink = document.querySelector('govukwc-back-link');
    setTimeout(() => {
      const link = backlink.shadowRoot.querySelector('a');
      link.addEventListener('click', (e) => e.preventDefault());
    });
  }

  if (story.startsWith('breadcrumbs')) {
    const breadcrumbs = document.querySelector('govukwc-breadcrumbs');
    setTimeout(() => {
      const links = Array.from(breadcrumbs.shadowRoot.querySelectorAll('a'));
      links.forEach((link) =>
        link.addEventListener('click', (e) => e.preventDefault()),
      );
    });
  }

  if (story.startsWith('button')) {
    const buttons = Array.from(document.querySelectorAll('govukwc-button'));
    buttons.forEach((button) => {
      setTimeout(() => {
        const el = button.shadowRoot.firstElementChild;
        el.addEventListener('click', (e) => e.preventDefault());
      });
      button.addEventListener('govukwc:click', (e) => {
        cb(e);
      });
    });
  }

  if (story.startsWith('checkboxes')) {
    const checkboxesList = document.querySelectorAll('govukwc-checkboxes');
    checkboxesList.forEach((checkboxes) => {
      checkboxes.addEventListener('govukwc:change', (e) => {
        cb(e);
      });
    });
  }

  if (story.startsWith('select')) {
    const selects = document.querySelectorAll('govukwc-select');
    selects.forEach((select) => {
      select.addEventListener('govukwc:change', (e) => {
        cb(e);
      });
    });
  }

  if (story.startsWith('summary-list')) {
    const summaryList = document.querySelector('govukwc-summary-list');
    summaryList.addEventListener('govukwc:click', (e) => {
      cb(e);
    });
  }

  if (story.startsWith('textarea')) {
    const textAreas = document.querySelectorAll('govukwc-textarea');

    textAreas.forEach((textArea) => {
      textArea.addEventListener('govukwc:change', (e) => {
        cb(e);
      });
      textArea.addEventListener('govukwc:keyup', (e) => {
        cb(e);
      });
    });
  }

  if (story.startsWith('character-count')) {
    const textAreas = document.querySelectorAll('govukwc-character-count');

    textAreas.forEach((textArea) => {
      textArea.addEventListener('govukwc:change', (e) => {
        cb(e);
      });
      textArea.addEventListener('govukwc:keyup', (e) => {
        cb(e);
      });
    });
  }

  if (story.startsWith('text-input')) {
    const textInputs = document.querySelectorAll('govukwc-text-input');
    textInputs.forEach((textInput) => {
      textInput.addEventListener('govukwc:change', (e) => {
        cb(e);
      });
      textInput.addEventListener('govukwc:keyup', (e) => {
        cb(e);
      });
    });
  }
};
