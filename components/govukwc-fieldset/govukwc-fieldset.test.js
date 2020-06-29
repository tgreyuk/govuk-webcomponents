import { fixture, expect, oneEvent } from '@open-wc/testing';
import * as stories from './govukwc-fieldset.stories';

describe('govukwc-fieldset', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
