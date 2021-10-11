const { defineConfig } = require('cypress')

// @ts-check

// load Webpack file devServer that comes with this plugin
// https://on.cypress.io/guides/component-testing/framework-configuration
const devServer = require('@cypress/react/plugins/load-webpack')

module.exports = defineConfig({
  video: false,
  fixturesFolder: false,
  viewportWidth: 500,
  viewportHeight: 500,
  nodeVersion: 'system',
  env: {
    coverage: true,
  },
  component: {
    componentFolder: 'src',
    testFiles: '**/*spec.*',
    setupNodeEvents (on, config) {
      devServer(on, config, {
        webpackFilename: 'webpack.config.js',
      })

      // IMPORTANT to return the config object
      // with the any changed environment variables
      return config
    },
  },
})
