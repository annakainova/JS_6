const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },   
  },
  env: {
    CYPRESS_VIEWPORT_WIDTH: 1366,
    CYPRESS_VIEWPORT_HEIGHT: 768,
  },
});
