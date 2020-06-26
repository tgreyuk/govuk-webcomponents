import { fixture, expect } from '@open-wc/testing';
import * as stories from './govukwc-breadcrumbs.stories';
import './govukwc-breadcrumbs';

describe('govukwc-breadcrumbs', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });
});
