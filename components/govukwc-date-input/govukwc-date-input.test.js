import { fixture, expect } from '@open-wc/testing';
import * as stories from './govukwc-date-input.stories';

describe('govukwc-date-input', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
