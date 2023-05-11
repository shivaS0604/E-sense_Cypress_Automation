<<<<<<< HEAD

//To handle Uncaught Exception
=======
//To handle Uncaught Exception globally 
>>>>>>> 3a325bb4e5bc15f018b416a92a5abc999117c2ae
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(`Caught at: ${runnable.title}\n`, err)
  return false
})

<<<<<<< HEAD
//To Login As Admin
const login = require('./pageObjects/adminIndexPage')
Cypress.Commands.add('adminLogin', (email, password) => {
  login.getLoginAsAdminBtn().click()
  login.getUserNameTxtFld().clear().type(email)
  login.getPasswordTxtFld().clear().type(password)
  login.getLogInBtn().click().wait(2000)
  cy.url().should('contain', 'dashboard')
  cy.wait(1000);
})

//To fetch cypress actions globally
=======
//To login as Admin
const login = require('./pageObjects/LMS/adminIndexPage')
Cypress.Commands.add('adminLogin', (email, password) => {
  login.getUserNameTxtFld().type(this.credentials.userName)
  login.getPasswordTxtFld().type(this.credentials.password)
  login.getLogInBtn().click().wait(2000)
  cy.url().should('contain', 'dashboard').wait(1000);
})

>>>>>>> 3a325bb4e5bc15f018b416a92a5abc999117c2ae
/// <reference types = "Cypress" />