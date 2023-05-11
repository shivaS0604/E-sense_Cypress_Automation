const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD

  env: {
    url:'https://cambridge.staging.topschool.co.in/' 
=======
  env: {
    url: 'https://cambridge.staging.topschool.co.in'
>>>>>>> 3a325bb4e5bc15f018b416a92a5abc999117c2ae
  },
  e2e: {
    url: 'https://cambridge.staging.topschool.co.in/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*cy.js'
  },
});
