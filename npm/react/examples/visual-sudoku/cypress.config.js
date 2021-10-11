const { defineConfig } = require("cypress");

// @ts-check

// load file devServer that comes with this plugin
// https://on.cypress.io/guides/component-testing/framework-configuration
const { devServer } = require('@cypress/react/plugins/react-scripts');

const {
  addMatchImageSnapshotPlugin
} = require("cypress-image-snapshot/plugin");

module.exports = defineConfig({
  video: false,
  fixturesFolder: false,
  viewportWidth: 1000,
  viewportHeight: 1000,
  component: {
    componentFolder: "src",
    testFiles: "**/*cy-spec.js",
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
      devServer(on, config);

      // IMPORTANT to return the config object
      // with the any changed environment variables
      return config;
    }
  }
});
