import { fixture, expect } from '@open-wc/testing';
import * as stories from './govukwc-character-count.stories';
import './govukwc-character-count';

describe('govukwc-character-count', () => {
  it(`should render character count`, async () => {
    const el = await fixture(stories.CharacterCount());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
  it(`should render word count`, async () => {
    const el = await fixture(stories.WordCount());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
