import { fixture, expect } from '@open-wc/testing';
import * as stories from './govukwc-back-link.stories';
import './govukwc-back-link';

describe('govukwc-back-link', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
