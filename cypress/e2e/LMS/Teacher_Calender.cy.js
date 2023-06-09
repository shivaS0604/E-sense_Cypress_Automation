const adminDashBoardPage=require('../../support/pageObjects/LMS/adminDashboardPage.js')
const teacherCalenderPage=require('../../support/pageObjects/LMS/teacherCalenderPage.js')
const teacherCommonPage=require("../../support/pageObjects/teacherCommonPage.js")
describe("MyCalender",function(){
    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.teacherLogin(credentials.teacherUsername1, credentials.teacherPassword)
            this.credentials=credentials;

        })
    })

it("E2E_4_MyCalender_Verify that School Teacher  can add Homework and Notes successfully for the classes assigned",function(){

    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show')
    
    


})
})
