# Cypress Recorder

![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/geggbdbnidkhbnbjoganapfhkpgkndfo?color=8F57F3&label=Chrome%20Rating)
![Tests](https://github.com/DeploySentinel/Recorder/actions/workflows/main.yml/badge.svg)

A Browser Extension that generates Cypress, Playwright and Puppeteer scripts
automatically from your browser interactions.

Simply step through your website while recording with DeploySentinel Recorder
and the extension will convert the captured user flow into a Cypress, Playwright
or Puppeteer script.

[![Chrome Store Icon](assets/ChromeStoreIcon.png)](https://chrome.google.com/webstore/detail/deploysentinel-recorder/geggbdbnidkhbnbjoganapfhkpgkndfo)
[![Firefox Addon Icon](assets/FirefoxAddonIcon.png)](https://addons.mozilla.org/en-US/firefox/addon/deploysentinel-recorder/)

Looking for a Cypress Studio alternative? Check out our
[Cypress Recorder Plugin](https://github.com/DeploySentinel/cypress-recorder).

# Demo

![Demo](assets/demo.gif)

# Features

- 💻 Automatically capture clicks, keyboard inputs, window resizes, and scroll
  events.
- 🤖 Generate clean and commented scripts for Cypress, Playwright and Puppeteer.
- 😀 Recording human actions and use shortcuts to generate assertion script.
- 📋 Preview recording progress and copy generated scripts mid-test to
  clipboard.
- 📛 Generate element selectors using `id` and `class` as well as other HTML
  properties (ex. `aria-label`, `alt`, `name`, `data-testid`)
- 🖱 Capture hover events via context menu option (right-click)
- ✅ Assert/wait for specific text to be visible on the page
- 📸 Generate full page screenshot events

# Getting Started

```sh
pnpm i cypress-recorcer
```

```js
// cypress.config.js
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE,
    setupNodeEvents(on, config) {
      // Add plugin import here 👇
      require('cypress-recorder')(on, config);
    },
  },
});
```

# Alternatives Comparison

We think there are other great open source codegen tools out there, here is how
we think we compare with them. We're always looking to improve our features, so
feel free to open an issue or PR for what you think is missing.

|                                | DeploySentinel Recorder | Headless Recorder | Chrome Puppeteer Recorder | Playwright CLI Codegen |
| ------------------------------ | ----------------------- | ----------------- | ------------------------- | ---------------------- |
| Automatic Click Capture        | ✅                      | ✅                | ✅                        | ✅                     |
| Automatic Input Capture        | ✅                      | ⚠                | ✅                        | ✅                     |
| Automatic File Upload Capture  | ❌                      | ❌                | ✅                        | ✅                     |
| Accessibility Selector Support | ✅                      | ❌                | ✅                        | ✅                     |
| Copy Code to Clipboard         | ✅                      | ✅                | ❌                        | ✅                     |
| data-testid Selector Support   | ✅                      | ✅                | ❌                        | ✅                     |
| Text selector support          | ⚠                      | ❌                | ❌                        | ✅                     |
| Screenshot event generation    | ✅                      | ✅                | ❌                        | ❌                     |
| Hover event generation         | ✅                      | ❌                | ❌                        | ❌                     |
| Record from Chrome Stable      | ✅                      | ✅                | ✅                        | ❌                     |

# Development Instructions

Install Dependencies: `pnpm i`

## Firefox

Start Local Webpack Dev Server for Firefox: `pnpm start-ff`

Compressed Firefox Extension: `pnpm build-ff`

Bundle source files for review: `pnpm bundle-source`

## Chrome

Start Local Webpack Dev Server for Chrome: `pnpm start-chrome`

Compressed Chrome Extension: `pnpm build-chrome`

Run E2E Tests: `pnpm test`

---

## fix webpack failure

```sh
export NODE_OPTIONS=--openssl-legacy-provider
```

## Plugin Revival: DeploySentinel's Creation Kept Alive by KonghaYao

This plugin was originally created by DeploySentinel, but had not been
maintained for some time. KonghaYao took it upon himself to revive the plugin
and implement many convenient features.
