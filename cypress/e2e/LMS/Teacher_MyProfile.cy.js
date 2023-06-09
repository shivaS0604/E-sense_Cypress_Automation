
const teacherDashboardPage = require('../../support/pageObjects/LMS/teacherDashboardPage')
const teacherMyprofilePage = require('../../support/pageObjects/LMS/teacherMyprofilePage')
const adminDashboardPage = require('../../support/pageObjects/LMS/adminDashboardPage')


describe("Teacher My profile Validation", function () {

    beforeEach(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/Teacher_Creadentials.json").then(function (validTeacherLoginData) {
            cy.teacherLogin(validTeacherLoginData.username, validTeacherLoginData.password)
        })
    })

    it('To verify user is able to send a request to change the Profile details by clicking on "Request Change" button and user is able to view the chnage son successful approval.', function () {
        teacherDashboardPage.getMyProfileIconInSideNavigationBar().click({ force: true })
        teacherMyprofilePage.myProfileAccountAandSupportBtn().click()
        teacherMyprofilePage.accountAandSupportRequestChangeBtn().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupWhatwouldyouliketochangeDropdown().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupWhatwouldyouliketochangeDropdownOpt().first().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupSendRequestBtn().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupTellusabitmoreabouttheissueTxtAra().type('issue')
        teacherMyprofilePage.accountAandSupportRequestChangeSuccessfullypopupCloseBtn().click()
        teacherDashboardPage.teacherLogout()
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminDashboardPage.getSupportTicketTabInSideNavBar().click()
    })
})