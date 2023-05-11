const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")

describe("Admin School Validation", function () {

    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username,validAdminLoginData.password)
        })
      })
      
      it('Adm_Dashboard 001 To validate user is able to view the attendance marked is reflected in the Grade wise attendace section and Student Present widgets', function () {
        dashboard.logout() 
      })
    })