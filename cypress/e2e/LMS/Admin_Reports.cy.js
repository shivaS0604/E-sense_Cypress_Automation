/// <reference types = "Cypress" />
const ReportDashboardPage=require('../../support/pageObjects/LMS/adminReportPage')
describe('Validate Admin Edited the Gradebook Template Successfully',function(){

    before(function(){
        cy.visit(Cypress.env("url"))
        cy.viewport(1920,1080)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
    })

    it('Verify that School Admin can Edit the TopSchool Gradebook Template',function(){
        ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
      //  cy.get('div.side-nav-bar ').invoke('show').contains('Reports').click()
        cy.get('[class="content-popover-reports"]').eq(0).should('be.visible').click({force:true})
        cy.wait(2000)
        cy.contains('Student Gradebook').should('have.text','Student Gradebook')
        cy.xpath('//p[contains(text(),"Grade 1")]/ancestor::tr//img[@aria-label="Edit"]').should('be.visible').click()
        cy.contains('Basic Template Details').should('have.text','Basic Template Details')

    })
})