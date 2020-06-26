export const storyEvents = (story, cb) => {
  if (story.startsWith('button')) {
    const buttons = Array.from(document.querySelectorAll('govukwc-button'));
    buttons.forEach((button) => {
      setTimeout(() => {
        const el = button.shadowRoot.firstElementChild;
        el.addEventListener('click', (e) => e.preventDefault());
      });
      button.addEventListener('clicked', (e) => {
        cb(e);
      });
    });
  }
  if (story.startsWith('summary-list')) {
    const summaryList = document.querySelector('govukwc-summary-list');
    summaryList.addEventListener('clicked', (e) => {
      cb(e);
    });
  }

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
};
