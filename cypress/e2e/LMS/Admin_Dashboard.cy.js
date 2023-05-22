const adminDashboardPage = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")
const adminUsersPage = require("../../support/pageObjects/LMS/adminUsersPage")
const teacherLogin = require('../../support/pageObjects/LMS/adminIndexPage')

describe("Admin School Validation", function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (credential) {
      cy.adminLogin(credential.username, credential.password)
    })
    cy.fixture("LMS/SchoolBasicList").as('basic');
  })

  it('Adm_Dashboard 001 To validate user is able to view the attendance marked is reflected in the Grade wise attendace section and Student Present widgets', function () {
    adminDashboardPage.logout()
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
    adminDashboardPage.getSchoolTabInSideNavigationBar().click().wait(1000)
    adminDashboardPage.getStudentGradebookTabInReportsTab().trigger('mouseover', { force: true }).wait(1000).click({ force: true })
    adminDashboardPage.getLogoPicInStudentGradebookTemplatePage().eq(0).should('be.visible')
    adminDashboardPage.getDashboardTabInSideNavigationBar().click()
    adminDashboardPage.getProfileImageInDashboard().should('be.visible')
  })

  it("Adm_Dashboard 003 To validate user is able to see the average score based on the Marks updated in Gradebook", function () {
    adminDashboardPage.getSchoolTabInSideNavigationBar().click().wait(1000)
    adminDashboardPage.getStudentGradebookTabInReportsTab().click({ force: true })
    adminDashboardPage.getGradebookTabInStudentGradebookPage().click()
    adminDashboardPage.getArrowIconLstForGradebookInStudentGradebookPage(this.basic.student1).click({ timeout: 2000 })
    adminDashboardPage.getEditButttonInStudentGradebookPage().scrollIntoView().click()
    adminDashboardPage.getScholosticActivitiesTheoryFirstBoxinStudentGradebookPage().type(50)
    adminDashboardPage.getScholosticActivitiesTheoryThirdBoxinStudentGradebookPage().type(50)
    adminDashboardPage.getScholosticActivitiesPageSaveBtn().scrollIntoView().click()
    cy.contains("Grade Updated Succesfully").should('be.visible')
    adminDashboardPage.getTotalScoreLstTxtForGradebookInStudentGradebookPage(this.basic.student1).should('have.text', "50%")
  })

  it("Adm_Dashboard 004 To validate user is able to view the TOP PERFORMER based on the marks updated in the Gradebook", function () {
    adminDashboardPage.getTopPerformersGradeDrpdwn().click()
    adminDashboardPage.getDropdownLstInDashboard().contains("Grade 1").click()
    adminDashboardPage.getTopPerformerOverallPercentageTxt(this.basic.student1).should('have.text', "50.00 %")
  })

  it("Adm_Dashboard 005 To Validate user is able to view the average percentage of the entire class in Site Analytics >> Overall Result", function () {
    adminDashboardPage.getOverallResultTabInSiteAnalytics().click()
    adminDashboardPage.getGradeDropDwnInOverallResultTab().click()
    adminDashboardPage.getDropdownLstInDashboard().contains("Grade 1").click()
    adminDashboardPage.getOverallResultBarInSiteAnalytics().trigger('mouseover').wait(1500)
    cy.contains("50%").should('be.visible')
  })

  it.only("Adm_Dashboard 005 To Validate the Teacher count is displayed based on the teacher present or Absent", function () {
    adminUsersPage.newTeacherCreation()
    cy.get('p[class*="TeacherDashboard_adminssionNumber"]').contains("alex").invoke('text').then((name) => {
      adminDashboardPage.logout()
      cy.fixture("LMS/Credentials").then(function (validTeacherLoginData) {
        cy.teacherLogin(name, validTeacherLoginData.teacherPassword)
      })
      cy.get('p.set-password-msg').should('be.visible').then(($element) => {
        if ($element.length === 0) {
          cy.fixture("LMS/Credentials").then(function (validTeacherLoginData) {
            cy.teacherLogin(name, validTeacherLoginData.teacherPassword)
          })
        } else {
          cy.get('button').contains("Continue").click()
          cy.get('input[name="password"]').type("Test@123")
          cy.get('input[name="confirmPassword"]').type("Test@123")
          cy.get('button[type="submit"]').click()
          cy.contains("Log In Details Sent Successfully").should('be.visible')
          cy.get('button[type="button"]').contains("Go Back To Login").click()
          teacherLogin.getUserNameTxtFld().clear().type(name)
          teacherLogin.getPasswordTxtFld().clear().type("Test@123")
          teacherLogin.getLogInBtn().click().wait(2000)
        }
        teacherDashboard.getNewTeacherPopupCancelIcon().click()
        for(let i=0;i<3;i++){
          teacherDashboard.getNewTeacherFirstPageContinueBtn().click().wait(1000)
        }
        teacherDashboard.getCalendarTabInSideNavigationBar().click({force:true})
        teacherDashboard.getRequestLeaveBtnInCalendarPage().click().wait(2000)
        teacherDashboard.getFullDayCheckBoxInRequestAbsencePopup().click()
        teacherDashboard.getStartDateInRequestAbsencePopup().click()
        teacherDashboard.getTodaysDateInCalendarPickerInRequestAbsencePopup().click()
        teacherDashboard.getEndDateInRequestAbsencePopup().click()
        teacherDashboard.getTodaysDateInCalendarPickerInRequestAbsencePopup().click().wait(2000)
        cy.get('.mt-4 > :nth-child(2)').click()
        teacherDashboard.getSendRequestBtnInRequestAbsencePopup().click()
        cy.contains("Request Sent Successfully").should('be.visible').wait(5000)
        teacherDashboard.teacherLogout()
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminDashboardPage.getSupportTicketTabInSideNavBar().click()
        adminDashboardPage.getLeaveRequestInSupportTickets().click()
        adminDashboardPage.getApproveBtnInLeaveRequestPage().eq(0).click()
        adminDashboardPage.getApproveRequestBtnInLeaveRequestPage().click()
        cy.contains("Leave Request Approved Substitution Pending").should('be.visible').wait(1500)
        adminDashboardPage.getApprovedStatusLstInLeaveRequestsPage("alex").should('have.text',"Approved")
        adminDashboardPage.getDashboardTabInSideNavigationBar().scrollIntoView().click()
        adminDashboardPage.getRightArrowIconInDashboardPage().click().wait(3000)
        adminDashboardPage.getTeacherPresentCount().invoke('text').then(text => {
          const str = "text";
          const letters = str.split('');
          const first = letters[0];
          const last = letters(letters.length - 1);
          const firstNum = parseInt(first);
          const lastNum = parseInt(last);
          cy.log(firstNum)
          cy.log(lastNum)
          cy.wrap(lastNum).should('be.gt',firstNum)
        })

      })
    })

  })

  //author - shiva
})