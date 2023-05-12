describe("Admin Users Validation", function () {

    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username,validAdminLoginData.password)
        })
      })

      it('TC001 Verify that School admin can add Teachers successfully when entered a valid data',  function () {

      })
    })