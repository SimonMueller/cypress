// @ts-check
const { defineConfig } = require('cypress')

// load file devServer that comes with this plugin
// https://on.cypress.io/guides/component-testing/framework-configuration
const { devServer } = require('@cypress/react/plugins/react-scripts')

const {
  initPlugin: initSnapshots,
} = require('cypress-plugin-snapshots/plugin')

module.exports = defineConfig({
  video: false,
  fixturesFolder: false,
  testFiles: '**/*-spec.js',
  viewportWidth: 500,
  viewportHeight: 500,
  ignoreTestFiles: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  env: {
    'cypress-plugin-snapshots': {
      prettier: true,
    },
  },
  component: {
    setupNodeEvents (on, config) {
      devServer(on, config)

      // initialize the snapshots plugin following
      // https://github.com/meinaart/cypress-plugin-snapshots
      initSnapshots(on, config)

      // IMPORTANT to return the config object
      // with the any changed environment variables
      return config
    },
  },
})
