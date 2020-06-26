import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/web-components';
import { addons } from '@storybook/addons';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import { addReadme } from 'storybook-readme/html';
import { logEvent } from 'storybook-events-logger';
import { storyEvents } from './events';

addDecorator(withHTML);
addDecorator(addReadme);
addParameters({
  options: {
    theme: {}, // this is just a workaround for addon-readme
  },
});

// force full reload to not reregister web components
const req = require.context('../', true, /\*.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}

// Log Custom Events
const channel = addons.getChannel();
channel.addListener('storyRendered', (story) => {
  storyEvents(story, logEvent);
});
