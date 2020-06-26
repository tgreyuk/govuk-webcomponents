import { fixture, expect, aTimeout } from '@open-wc/testing';
import * as stories from './govukwc-accordion.stories';
import './govukwc-accordion';

describe('AccordionComponent', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    await aTimeout(10);
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
