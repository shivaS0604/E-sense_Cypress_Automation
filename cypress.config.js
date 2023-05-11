const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'https://cambridge.staging.topschool.co.in'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
