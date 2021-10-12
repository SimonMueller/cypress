// @ts-check
const { defineConfig } = require('cypress')

// load file devServer that comes with this plugin
// https://on.cypress.io/guides/component-testing/framework-configuration
const { devServer } = require('@cypress/react/plugins/react-scripts')

 module.exports = defineConfig({
  video: false,
  fixturesFolder: false,
  viewportWidth: 1000,
  viewportHeight: 1000,
  env: {
    coverage: false
  },
  component: {
    componentFolder: "src",
    testFiles: "**/*spec.js",
		setupNodeEvents(on, config) {
      devServer(on, config)

       // IMPORTANT to return the config object
       // with the any changed environment variables
       return config
		}
  }
 })

// @ts-ignore
require('@applitools/eyes-cypress')(module)
