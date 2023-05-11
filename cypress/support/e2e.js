//X-path plugin
require('cypress-xpath');

//To handle Uncaught Exception
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(`Caught at: ${runnable.title}\n`, err)
  return false
})

//To Login As Admin
const login = require('./pageObjects/LMS/adminIndexPage')
Cypress.Commands.add('adminLogin', (email, password) => {
  login.getLoginAsAdminBtn().click()
  login.getUserNameTxtFld().clear().type(email)
  login.getPasswordTxtFld().clear().type(password)
  login.getLogInBtn().click().wait(2000)
  cy.url().should('contain', 'dashboard')
  cy.wait(1000);
})

/// <reference types = "Cypress" />

