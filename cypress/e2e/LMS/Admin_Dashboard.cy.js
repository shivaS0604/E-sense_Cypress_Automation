/// <reference types = "Cypress" />

const adminDashboardPage = require("../../support/pageObjects/LMS/adminDashboardPage")
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")

describe("Admin School Validation", function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920,1080)
    cy.fixture("LMS/Credentials").then(function (credential) {
      cy.adminLogin(credential.username, credential.password)
    })
    cy.fixture("LMS/SchoolBasicList").as('basic');
  })

  it('Adm_Dashboard 001 To validate user is able to view the attendance marked is reflected in the Grade wise attendace section and Student Present widgets', function () {
    dashboard.logout()
    cy.fixture("LMS/Credentials").then(function (validTeacherLoginData) {
      cy.teacherLogin(validTeacherLoginData.teacherUsername1, validTeacherLoginData.teacherPassword)
    })
    teacherDashboard.getMarkClassAttendanceBtn().click().wait(2000)
    teacherDashboard.getMarkAttendanceBtnInMarkAttendancePage().invoke('text').then((text) => {
      if (text === "Mark Attendance ") {
        teacherDashboard.getMarkAttendanceBtnInMarkAttendancePage().click()
        teacherDashboard.getMarkAttendanceSubmitBtn().click()
        cy.contains("Submit Attendance Record!").should('be.visible')
        teacherDashboard.getYesSubmitMarkAttendanceSubmitBtn().click()
        cy.contains("Attendence updated successfully").should('be.visible')
      } else {
        cy.log("Attendance is already marked")
      }
      cy.go('back')
      teacherDashboard.teacherLogout()
    })
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
    adminDashboardPage.getGradeWiseAttendanceBarLst(this.basic.className).trigger('mouseover')
    cy.contains("100% present").should('be.visible')
  })

  it("Adm_Dashboard 002 To validate user is able to update School picture is reflected in Reports", function () {
    adminDashboardPage.getSchoolTabInSideNavigationBar().click()
    adminDashboardPage.getStudentGradebookTabInReportsTab().trigger('mouseover',{timeout:2000}).click({force:true})
    adminDashboardPage.getLogoPicInStudentGradebookTemplatePage().eq(0).should('be.visible')
    adminDashboardPage.getDashboardTabInSideNavigationBar().click()
    adminDashboardPage.getProfileImageInDashboard().should('be.visible')
  })

  it("Adm_Dashboard 003 To validate user is able to see the average score based on the Marks updated in Gradebook", function () {
    adminDashboardPage.getSchoolTabInSideNavigationBar().click()
    adminDashboardPage.getStudentGradebookTabInReportsTab().trigger('mouseover',{timeout:2000}).click({force:true})
    Grade Updated Succesfully

  })
//author - shiva
})