//To handle Uncaught Exception globally 
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(`Caught at: ${runnable.title}\n`, err)
  return false
})

//To login as Admin
const login = require('./pageObjects/LMS/adminIndexPage')
Cypress.Commands.add('adminLogin', (email, password) => {
  login.getUserNameTxtFld().type(this.credentials.userName)
  login.getPasswordTxtFld().type(this.credentials.password)
  login.getLogInBtn().click().wait(2000)
  cy.url().should('contain', 'dashboard').wait(1000);
})

/// <reference types = "Cypress" />