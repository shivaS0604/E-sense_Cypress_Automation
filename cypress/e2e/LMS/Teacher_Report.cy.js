/// <reference types = "Cypress" />
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")
const adminReportPage = require('../../support/pageObjects/LMS/adminReportPage')
const ReportDashboardPage = require('../../support/pageObjects/LMS/adminReportPage')
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")

describe("TeacherReports",function(){

    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.teacherLogin(credentials.teacherUsername2, credentials.teacherPassword)
            this.credentials=credentials;

        })   
     })

    it('Verify that Teacher can add / edit the results in Students Gradebook  of the respective grades',function(){
             // pre condition --- Create student
var rand=Math.floor(Math.random()*10)
        teacherDashboard.teacherLogout()
        cy.wait(1000)
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
     ReportDashboardPage.getUserTab().click()
     ReportDashboardPage.getStudentsTab().click()
     ReportDashboardPage.getAddStudentsIcon().click()
     ReportDashboardPage.getAddStudentPageFullNameTxtfield().click().type("kumar")
     ReportDashboardPage.getAddStudentPageGenderDropdown().click()
     ReportDashboardPage.getAddStudentPageGenderList().click()
     ReportDashboardPage.getAddStudentPagePrimaryDetailsContactNumb().click().type(9999999999)
     ReportDashboardPage.getAddStudentPageSelectRelationDropdown().click()
     ReportDashboardPage.getAddStudentPageSelectRelation().click()
     ReportDashboardPage.getAddStudentPageGuardianNameTxtfield().click().type("veena")
     ReportDashboardPage.getAddStudentPageGuardianContactNumb().click().type("8888888888")
     ReportDashboardPage.getAddStudentPageAddressLine1TxtField().click().type("Bangalore")
     ReportDashboardPage.getAddStudentPagePincodeTxtfield().click().type(561101).wait(1000)
     ReportDashboardPage.getAddStudentButton().click()
     ReportDashboardPage.getAddStudentPageAdmissionYeartxtfield().click({ force: true }).type("2012")
     ReportDashboardPage.getAddStudentPageAdmissionNumbTxtfield().click().type(1+""+rand)
     ReportDashboardPage.getAddStudentPageGradeDropdown().click()
     //ReportDashboardPage.getAddStudentPageGradesList().click()
     cy.get('[role="listbox"] li').contains('Grade 2').click()
     ReportDashboardPage.getAddStudentPageSectionDropdown().click()
    // ReportDashboardPage.getAddStudentPageSectionList().click()
    cy.get('[role="listbox"] li').contains('A').click()
     ReportDashboardPage.getAddStudentPageRollNumbTxtfield().click().wait(1000).type(2+""+rand)
     ReportDashboardPage.getAddStudentButton().click()
 

     dashboard.logout()
    cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
      cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
    })
       cy.get('div[class="side-nav-content "]').invoke('show')
       cy.get('div[class="side-nav-content "] li').contains('Reports').click({force: true})
       cy.get('div[class="content-report-sect"] [class="popover-arrow"]').eq(0).wait(1000).click()

       cy.get('tr[role="checkbox"] td:nth-child(4)').each((txt,index)=>{
        var studentName=txt.text()
        if (studentName=='kumar') {
            cy.get('[data-testid="ArrowForwardIosIcon"]').eq(index).click({force:true})
        }
        else{
            console.log("no data found");
        }
       })
       cy.xpath('//button[contains(.,"Edit")]').click()
       cy.xpath('//input[@type="number"]').eq(0).click().type(70)
       cy.xpath('//input[@type="number"]').eq(1).click().type(30)
       cy.contains('Drawing').next().click().type(3)

    })

})