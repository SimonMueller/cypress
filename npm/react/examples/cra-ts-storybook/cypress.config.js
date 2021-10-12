// Component testing, JavaScript, Create React App, Webpack

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    testFiles: "**/*cy-spec.{js,jsx,ts,tsx}",
    componentFolder: "src"
  }
})