import { fixture, expect, oneEvent } from '@open-wc/testing';
import * as stories from './govukwc-select.stories';

describe('govukwc-select', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should fire event on change`, async () => {
    const el = await fixture(stories.Default());
    setTimeout(() => el.handleChange());
    const { detail } = await oneEvent(el, 'govukwc:change');
    expect(detail.value).to.not.be.undefined;
  });
});
