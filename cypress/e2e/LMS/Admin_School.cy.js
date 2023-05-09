
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
})