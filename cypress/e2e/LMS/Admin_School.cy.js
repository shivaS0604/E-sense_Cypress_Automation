<<<<<<< HEAD

describe("Admin School Validation", function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })

  it("TC001 Verify_ sample", function () {
    cy.xpath("//p[text()='Your Dashboard']").should('be.visible')
  })
=======
describe('Admin School Validation', function () {

    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
      })

      it('TC001 Validate thee admin school login',function () {

      })
>>>>>>> 3a325bb4e5bc15f018b416a92a5abc999117c2ae
})