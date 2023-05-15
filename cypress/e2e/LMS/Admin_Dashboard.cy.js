const adminDashboardPage = require("../../support/pageObjects/LMS/adminDashboardPage")
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")

describe("Admin School Validation", function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
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
    //let classNam = "NTT grade1 - B";
    adminDashboardPage.getGradeWiseAttendanceBarLst(this.basic.className).trigger('mouseover')
    cy.contains("100% present").should('be.visible')
  })

  it("")
//author - shiva

})