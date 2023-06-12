const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 20000,
  failOnStatusCode: false,


  env: {
    url:'https://malco.staging.topschool.co.in/' 
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*cy.js'
  },
});
