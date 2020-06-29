import { fixture, expect } from '@open-wc/testing';
import * as stories from './govukwc-error-summary.stories';

describe('govukwc-error-summary', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
