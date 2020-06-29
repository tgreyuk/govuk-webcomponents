import { html } from 'lit-html';
import { readme } from './govukwc-radios.docs';
import './govukwc-radios';

export default {
  title: 'Radios',
  component: 'govukwc-radios',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
};

export const Default = () =>
  html`<govukwc-radios
    legend="Have you changed your name?"
    inline
    hint="This includes changing your last name or spelling your name differently."
  >
    <govukwc-radio
      id="changed-name"
      name="changed-name"
      label="Yes"
      value="yes"
    ></govukwc-radio>
    <govukwc-radio
      id="changed-name-2"
      name="changed-name"
      label="No"
      value="no"
    ></govukwc-radio>
  </govukwc-radios>`.getHTML();

export const Stacked = () =>
  html`<govukwc-radios legend="Where do you live?">
    <govukwc-radio
      id="where-do-you-live"
      name="where-do-you-live"
      label="England"
      value="england"
    ></govukwc-radio>
    <govukwc-radio
      id="where-do-you-live-2"
      name="where-do-you-live"
      label="Scotland"
      value="scotland"
    ></govukwc-radio>
    <govukwc-radio
      id="where-do-you-live-3"
      name="where-do-you-live"
      label="Wales"
      value="wales"
    ></govukwc-radio>
    <govukwc-radio
      id="where-do-you-live-4"
      name="where-do-you-live"
      label="Northern Ireland"
      value="northern-ireland"
    ></govukwc-radio>
  </govukwc-radios>`.getHTML();

export const WithHints = () =>
  html`<govukwc-radios
    legend="How do you want to sign in?"
    hint="You’ll need an account to prove your identity and complete your Self Assessment."
  >
    <govukwc-radio
      id="sign-in"
      name="sign-in"
      label="Sign in with Government Gateway"
      value="government-gateway"
      hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
    ></govukwc-radio>
    <govukwc-radio
      id="sign-in-2"
      name="sign-in"
      label="Sign in with GOV.UK Verify"
      value="government-verify"
      hint=" You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
    ></govukwc-radio>
  </govukwc-radios>`.getHTML();
