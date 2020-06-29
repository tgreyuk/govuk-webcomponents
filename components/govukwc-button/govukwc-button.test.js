import { fixture, expect, oneEvent } from '@open-wc/testing';
import * as stories from './govukwc-button.stories';

describe('govukwc-button', () => {
  it(`should render`, async () => {
    const el = await fixture(stories.Default());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should set url and return anchor element`, async () => {
    const el = await fixture(stories.Start());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should render disabled`, async () => {
    const el = await fixture(stories.Disabled());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should render preventDoubleClick data attr`, async () => {
    const el = await fixture(stories.PreventDoubleClick());
    expect(el.shadowRoot.innerHTML).to.equalSnapshot();
  });

  it(`should fire event on click`, async () => {
    const el = await fixture(stories.Default());
    setTimeout(() => el.handleClick());
    const { detail } = await oneEvent(el, 'govukwc:click');
    expect(el.clicked).to.be.true;
    expect(detail.el).to.not.be.undefined;
  });
});
