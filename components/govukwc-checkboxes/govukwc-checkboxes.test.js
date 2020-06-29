import { fixture, expect, oneEvent } from '@open-wc/testing';
import * as stories from './govukwc-checkboxes.stories';

describe('govukwc-checkboxes', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should render with conditional inputs`, async () => {
    const el = await fixture(stories.ConditionalInputs());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should render small`, async () => {
    const el = await fixture(stories.Small());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should render error`, async () => {
    const el = await fixture(stories.Error());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should fire event on change`, async () => {
    const el = await fixture(stories.ConditionalInputs());
    setTimeout(() => el.dispatchChangeEvent());
    const { detail } = await oneEvent(el, 'govukwc:change');
    expect(detail.checkboxes).to.not.be.undefined;
  });
});
