import { define, html } from 'https://unpkg.com/hybrids@4.1.3/src/index.js'

const HybridsApp = {
  appName: 'Welcome to Hybrids!',

  pageLoaded: '<span>No page loaded, yet.</span>',

  page: ({ pageLoaded }) => pageLoaded,

  render: ({ appName, page }) =>
    html`
      <div>
        <h1>${appName}</h1>
        <p>Example of an unbundled Hybrids app with dynamic imports.</p>
        <div>
          <button onclick="${load}" page="./pages/Welcome.mjs">
            Welcome Page
          </button>
          <button onclick="${load}" page="./pages/Other.mjs">
            Other Page
          </button>
        </div>
      </div>
    `,
}