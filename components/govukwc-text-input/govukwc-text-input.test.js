import { fixture, expect, oneEvent } from '@open-wc/testing';
import * as stories from './govukwc-text-input.stories';

describe('govukwc-text-input', () => {
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

  it(`should fire event on keyup`, async () => {
    const el = await fixture(stories.Default());
    setTimeout(() => el.handleKeyup());
    const { detail } = await oneEvent(el, 'govukwc:keyup');
    expect(detail.value).to.not.be.undefined;
  });
});
