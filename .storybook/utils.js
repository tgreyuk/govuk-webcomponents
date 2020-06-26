export const storyEvents = (story, cb) => {
  if (story.startsWith('button')) {
    const button = document.querySelector('govukwc-button');
    button.addEventListener('clicked', (e) => {
      cb(e);
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
};
