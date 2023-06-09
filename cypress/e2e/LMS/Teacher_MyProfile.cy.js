
const teacherDashboardPage = require('../../support/pageObjects/LMS/teacherDashboardPage')
const teacherMyprofilePage = require('../../support/pageObjects/LMS/teacherMyprofilePage')
const adminDashboardPage = require('../../support/pageObjects/LMS/adminDashboardPage')
const adminSupportTicketPage = require('../../support/pageObjects/LMS/adminSupportTicketPage')
const teacherNotificationsPage = require('../../support/pageObjects/LMS/teacherNotificationsPage')


describe("Teacher My profile Validation", function () {

    beforeEach(function () {
        cy.visit(Cypress.env("url"))
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Teacher_Creadentials.json").then(function (validTeacherLoginData) {
            cy.teacherLogin(validTeacherLoginData.username, validTeacherLoginData.password)
        })
    })

    it('E2E_01 To verify user is able to send a request to change the Profile details by clicking on "Request Change" button and user is able to view the chnage son successful approval.', function () {
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
        adminSupportTicketPage.getSupportTicketsResolveBtn().first().click()
        adminSupportTicketPage.getSupportTicketsResolveRemarksTextareafld().type('remarks')
        adminSupportTicketPage.getSupportTicketsPopupResolveBtn().click()
        adminSupportTicketPage.getSupportTicketsUndoBtn().click()
    })

    it('E2E_02 To verify user is notified once the request is Resolved/Rejected/Send to Top school.', function () {
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
        adminSupportTicketPage.getSupportTicketsResolveBtn().first().click()
        adminSupportTicketPage.getSupportTicketsResolveRemarksTextareafld().type('remarks')
        adminSupportTicketPage.getSupportTicketsPopupResolveBtn().click()
        adminSupportTicketPage.getSupportTicketsUndoBtn().click()
    })

    it('E2E_03 To verify Teacher is able to raise a support tickets.', function () {
        teacherDashboardPage.getMyProfileIconInSideNavigationBar().click({ force: true })
        teacherMyprofilePage.myProfileAccountAandSupportBtn().click()
        teacherMyprofilePage.accountAandSupportRequestChangeBtn().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupWhatwouldyouliketochangeDropdown().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupWhatwouldyouliketochangeDropdownOpt().first().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupSendRequestBtn().click()
        teacherMyprofilePage.accountAandSupportRequestChangepopupTellusabitmoreabouttheissueTxtAra().type('issue')
        teacherMyprofilePage.accountAandSupportRequestChangeSuccessfullypopupCloseBtn().click()
    })

    it('E2E_04 To verify Teacher is notified once the Support ticket raised is Resolved/Rejected/Send to Top school', function () {
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
        adminSupportTicketPage.getSupportTicketsResolveBtn().first().click()
        adminSupportTicketPage.getSupportTicketsResolveRemarksTextareafld().type('remarks')
        adminSupportTicketPage.getSupportTicketsPopupResolveBtn().click()
        adminDashboardPage.logout()
        cy.fixture("LMS/Teacher_Creadentials.json").then(function (validTeacherLoginData) {
            cy.teacherLogin(validTeacherLoginData.username, validTeacherLoginData.password)
        })
        teacherNotificationsPage.getNotificationsSideTab().click({ force: true })
        teacherNotificationsPage.getEarlierNotifications().first().should('contain', "Raised Ticket/Requested Change ")
        teacherDashboardPage.teacherLogout()
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminDashboardPage.getSupportTicketTabInSideNavBar().click()
        adminSupportTicketPage.getSupportTicketsUndoBtn().click()
    })

    it('E2E_05 To verify Teacher is able to send a feedback.', function () {
        teacherDashboardPage.getMyProfileIconInSideNavigationBar().click({ force: true })
        teacherMyprofilePage.myProfileAccountAandSupportBtn().click()
        teacherMyprofilePage.getSupportAndFeedbackTab().click()
        teacherMyprofilePage.getFeedbackTaggaleBtn().click()
        teacherMyprofilePage.getShareFeedbackBtn().click()
        teacherMyprofilePage.getShareFeedbackSelectModuleDropdown().click()
        teacherMyprofilePage.getShareFeedbackSelectModuleDropdownOpt().first().click()
        teacherMyprofilePage.getShareFeedbackEnterYourFeedbackTextareaFld().type('Problem')
        teacherMyprofilePage.getShareFeedbackstarBtn().first().click()
        teacherMyprofilePage.getShareFeedbackSubmitBtn().click()
        cy.get('h3[data-testid="titletext"]').should('have.text','Feedback Submitted Successfully')

    })

})