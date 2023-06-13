/// <reference types = "Cypress" />
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")
const adminReportPage = require('../../support/pageObjects/LMS/adminReportPage')
const ReportDashboardPage = require('../../support/pageObjects/LMS/adminReportPage')
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherReport = require('../../support/pageObjects/LMS/teacherReportPage')

describe("TeacherReports", function () {

    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.teacherLogin(credentials.teacherUsername2, credentials.teacherPassword)
            this.credentials = credentials;
        })

    })


    it('Tc__001 Verify that Teacher can add / edit the results in Students Gradebook  of the respective grades', function () {
        // pre condition --- Create student
        var randNumb = Math.floor(Math.random() * 100)
        teacherDashboard.teacherLogout()
        cy.wait(500)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getUserTab().click()
        ReportDashboardPage.getStudentsTab().click()
        ReportDashboardPage.getAddStudentsIcon().click({ force: true })
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
        ReportDashboardPage.getAddStudentPageAdmissionNumbTxtfield().click().type(randNumb)
        ReportDashboardPage.getAddStudentPageGradeDropdown().click()
        teacherReport.getListOfGrade().click()
        ReportDashboardPage.getAddStudentPageSectionDropdown().click()
        teacherReport.getSectionList().click()
        ReportDashboardPage.getAddStudentPageRollNumbTxtfield().click().wait(1000).type(randNumb)
        ReportDashboardPage.getAddStudentButton().click()
        dashboard.logout()
   
        // Actual condition --Verify that Teacher can add / edit the results in Students Gradebook  of the respective grades
        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudentGradeBookTab().eq(0).wait(1000).click()
        cy.wait(1000)
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == 'kumar') {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getEditBtn().click().wait(1000)
        teacherReport.getTheoryTxtField().click().type(70)
        teacherReport.getPracticleTxtField().click().type('00')
        teacherReport.getCoScholasticActivitiesMarksTxtField().click().type(3)
        teacherReport.getRemarksTxtField().click().type('nothing')
        teacherReport.getTotalPercentage().should('be.visible')
        teacherReport.getStudentResult().should('be.visible')
        teacherReport.getSaveBtn().click()
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == 'kumar') {
                teacherReport.getUpdatedStatus().should('be.visible')
            }
        })
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == 'kumar') {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getCancelBtn().click()
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == 'kumar') {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getShowGradingSystemDropdown().click()
        teacherReport.getGradeSystemLists().should('be.visible')
        teacherReport.getPreviewANDprintBtn().click()
        teacherReport.getPreviewANDprintList().should('be.visible')
        cy.get('body').click()
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
        ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
        ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', 'Student Gradebook')
        teacherReport.getGradesList().each((gradeslist, index) => {
            const ListOfGrades = gradeslist.text()
            if (ListOfGrades == 'Grade 2') {
                teacherReport.getPublishedStatus(index).should('be.visible')
            }
        })

        // Post conditon- Delete Created Student account
        ReportDashboardPage.getUserTab().click({ force: true })
        ReportDashboardPage.getStudentsTab().click().wait(2000)
        ReportDashboardPage.getAdminModuleUserPageStudentsList().each(($text, index) => {
            var studentName = $text.text().trim()
            if (studentName === 'kumar') {
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeletePopup().click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteButton().click()
            }
        })
    })

    it('Tc__002 Verify that Teacher can view the Published / Pending Students Gradebook of the respective grades ',function(){
        // pre condition --- Create student
        var randNumb = Math.floor(Math.random() * 100)
        teacherDashboard.teacherLogout()
        cy.wait(500)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getUserTab().click()
        ReportDashboardPage.getStudentsTab().click()
        ReportDashboardPage.getAddStudentsIcon().click({ force: true })
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
        ReportDashboardPage.getAddStudentPageAdmissionNumbTxtfield().click().type(randNumb)
        ReportDashboardPage.getAddStudentPageGradeDropdown().click()
        teacherReport.getListOfGrade().click()
        ReportDashboardPage.getAddStudentPageSectionDropdown().click()
        teacherReport.getSectionList().click()
        ReportDashboardPage.getAddStudentPageRollNumbTxtfield().click().wait(1000).type(randNumb)
        ReportDashboardPage.getAddStudentButton().click()
        dashboard.logout()

        // Actual condition --Verify that Teacher can view the Published / Pending Students Gradebook of the respective grades 
        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudentGradeBookTab().eq(0).wait(1000).click()
        cy.wait(1000)
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == 'kumar') {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getEditBtn().click().wait(1000)
        teacherReport.getTheoryTxtField().click().type(70)
        teacherReport.getPracticleTxtField().click().type('00')
        teacherReport.getCancelBtn().click()
        teacherReport.getSaveANDcountinueBtn().click()
        ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', 'Student Gradebook')
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })

        // Post conditon- Delete Created Student account
        ReportDashboardPage.getUserTab().click({ force: true })
        ReportDashboardPage.getStudentsTab().click().wait(2000)
        ReportDashboardPage.getAdminModuleUserPageStudentsList().each(($text, index) => {
            var studentName = $text.text().trim()
            if (studentName === 'kumar') {
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeletePopup().click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteButton().click()
            }
        })


    })
})