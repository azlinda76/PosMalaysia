const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pos.com.my",   // Base URL
    watchForFileChanges: false,
    video: true,
    viewportWidth: 1000,
    viewportHeight: 1000,
    screenshotsFolder: 'screenshots',  // change folder name
    screenshotOnRunFailure: true,             // default = true
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
