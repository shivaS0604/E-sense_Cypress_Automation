/// <reference types = "Cypress" />

const AdminIndexPage = require('../../support/pageObjects/LMS/adminIndexPage')
const adminDashBoardPage = require('../../support/pageObjects/LMS/adminDashboardPage')
const calenderPage=require('../../support/pageObjects/LMS/adminCalenderPage.js')

describe('Calender', () => {
    before('Navigate to the application', function () {

        cy.fixture("LMS/Credentials").then(function (credentials) {
            this.credentials = credentials;

        })
    })
    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.adminLogin(this.credentials.username, this.credentials.password)
    })
    it('E2E_01_Calender_Remainder_To Validate that the user is able to create reminder in calender and display the popup about the reminder anywhere in screen for selected date and time.', () => {
        adminDashBoardPage.getSideNavBar().invoke('show')
        adminDashBoardPage.getCalenderTab().click()
        calenderPage.getYourCalenderText().should('be.visible', { timeout: 10000 })
        calenderPage.getCreateNewButton().click()
        calenderPage.getCreateANewCalenderText().should('be.visible', { timeout: 10000 })
        calenderPage.getRemainderTab().click()
        calenderPage.getCreateRemainderText().should('be.visible')
        var rand = Math.ceil(Math.random() * 1000)
        var remain = 'Remainder' + rand;
        calenderPage.getEnterRemainderTitleTextField().type(remain)
        calenderPage.getDateTextField().click()
        var d = new Date();
        var date = d.getDate()
        calenderPage.getDateTextField().then(($e1) => {
            const actualDate = $e1.prop('value');

            if (!actualDate.includes(date)) {
                calenderPage.getTodayDateButton().click()

            }
            else {
                calenderPage.getRemainderModelContent().click({ force: true })
            }

        })
        calenderPage.getStartTimeButton().click()
        for (let i = 0; i < 2; i++) {
            cy.get('body').type('{downArrow}')
            cy.wait(500)

        }
        calenderPage.getAMButton().click()
        calenderPage.getRemainderModelContent().click({ force: true })
        calenderPage.getStartTimeButton().should('have.value', '10:00 am')
        calenderPage.getEndTimeButton().click()
        calenderPage.getPMButton().click()
        calenderPage.getRemainderModelContent().click({ force: true })
        cy.wait(500)
        calenderPage.getEndTimeButton().click()
        cy.wait(500)
        for (let j = 0; j < 2; j++) {
            cy.get('body').type('{downArrow}')
            cy.wait(500)

        }
        calenderPage.getRemainderModelContent().click({ force: true })
        calenderPage.getEndTimeButton().should('have.value', '10:00 pm')
        calenderPage.getRepeatDropdown().click()
        calenderPage.getRepeatlist('Every weekday').click()
        cy.xpath("//label[text()='End this reminder on']").click({ force: true })
        cy.get('div[class*="MuiCalendarPicker-root"] div[role="row"]').last().find('div[role="cell"] [type="button"]').last().click()
        cy.wait(1000)
        calenderPage.getAddDescriptionTextarea().type('Remainder for Event' + remain).wait(1000)
        calenderPage.getAttachAFileButton().attachFile('LMS/Event_added.pdf',{force:true})
        cy.wait(500)

    })


})