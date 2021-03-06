import { fixture, expect } from '@open-wc/testing';
import * as stories from './govukwc-accordion.stories';
import './govukwc-accordion';

describe('govukwc-accordion', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
