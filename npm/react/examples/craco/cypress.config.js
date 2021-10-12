// @ts-check
const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/react/plugins/craco')

const cracoConfig = require('./craco.config.js')

module.exports = defineConfig({
  component: {
    testFiles: '**/*.test.{js,ts,jsx,tsx}',
    componentFolder: 'src',
    setupNodeEvents (on, config) {
      devServer(on, config, cracoConfig)

      return config
    },
  },
})
