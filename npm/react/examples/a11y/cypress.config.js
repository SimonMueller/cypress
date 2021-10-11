const { defineConfig } = require('cypress')

// @ts-check

// load file devServer that comes with this plugin
// https://on.cypress.io/guides/component-testing/framework-configuration

const devServer = require('@cypress/react/plugins/react-scripts')

module.exports = defineConfig({
  video: false,
  fixturesFolder: false,
  testFiles: '**/*spec.js',
  viewportWidth: 500,
  viewportHeight: 500,
  component: {
    setupNodeEvents (on, config) {
      devServer(on, config)

      // IMPORTANT to return the config object
      // with the any changed environment variables
      return config
    },
  },
})
