/// <reference types = "Cypress" />

const AdminIndexPage = require('../../support/pageObjects/LMS/adminIndexPage')
const adminDashBoardPage = require('../../support/pageObjects/LMS/adminDashboardPage')
const calenderPage=require('../../support/pageObjects/LMS/adminCalenderPage.js')

describe('Calender', function(){
    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.adminLogin(credentials.username, credentials.password)

        })
      
    })
    it('E2E_01_Calender_Remainder_To Validate that the user is able to create reminder in calender and display the popup about the reminder anywhere in screen for selected date and time.', () => {
        adminDashBoardPage.getSideNavBar().invoke('show')
        adminDashBoardPage.getCalenderTab().click()
        calenderPage.getYourCalenderText().should('be.visible', { timeout: 10000 })
        calenderPage.getCreateNewButton().click()
        calenderPage.getCreateANewCalenderText().should('be.visible', { timeout: 10000 })
        calenderPage.getRemainderTab().click()
        calenderPage.getCreateRemainderText().should('be.visible')
        var rand = Math.ceil(Math.random()*1000)
        var remain = 'Remainder' + rand;
        calenderPage.getEnterRemainderTitleTextField().type(remain)
        calenderPage.getDateTextField().click()
        var d = new Date();
        var date = d.getDate()+1
        cy.log(date)

        cy.xpath("//button[text()='"+date+"']").click()
        
        calenderPage.getStartTimeButton().click()
        for (let i = 0; i < 2; i++) {
            
            cy.get('body').type('{downArrow}')
            cy.wait(500)

        }
        calenderPage.getAMButton().click()
        calenderPage.getRemainderModelContent().click({ force: true })
        calenderPage.getStartTimeButton().should('have.value', '10:00 am')
        calenderPage.getEndTimeButton().click().wait(500)
        calenderPage.getPMButton().click()
        calenderPage.getRemainderModelContent().click({ force: true })
        cy.wait(500)
        calenderPage.getEndTimeButton().click()
        cy.wait(500)
        for (let j = 0; j < 2; j++) {
            cy.get('body').type('{downArrow}')
            cy.wait(500)

        }
        calenderPage.getRemainderModelContent().click({ force: true } )
        calenderPage.getEndTimeButton().should('have.value', '10:00 pm')
        calenderPage.getRepeatDropdown().click()
        calenderPage.getRepeatlist('Every weekday').click()
        calenderPage.getEndRemainderOnButton().click({ force: true })
        calenderPage.getPickDateInCalender(Date).click()
        cy.wait(1000)
        calenderPage.getAddDescriptionTextarea().type('Remainder for Event' + remain).wait(1000)
        calenderPage.getAttachAFileButton().attachFile('LMS/Event_added.pdf',{force:true}).wait(500)
        calenderPage.getAddNotesButton().click()
        calenderPage.getAddNoteButton().click()
        var title="Notes"+remain
        var description="description"+remain
        calenderPage.getViewNoteTimeText().then(function($el){
        var time=$el.text()
        calenderPage.getAddTitleTextField().type(title)
        calenderPage.getDescriptionTextField().type(description).wait(2000)
        calenderPage.getBackToNoteListButton().click().wait(1000)
        calenderPage.getAllNotesButton().click()
        calenderPage.getSearchTextField().type(title)
        calenderPage.getVerifyAddNotesTitleText(title).should('be.visible')
        calenderPage.getVerifyDescriptionText(description).should('be.visible')
        calenderPage.getVerifyTimeText(time).should('be.visible')
        calenderPage.getCloseIcon().click()
        calenderPage.getSaveRemainderButton().click()
        calenderPage.getRemainderSavedSuccesfullyMsg().should('be.visible',{timeout:1000})
   
    })

    calenderPage.getRemaindersCheckBox().click()
    calenderPage.getWeeklyDropdown().select('Monthly')
    calenderPage.getVerifyRemainderTextInCalender(date,remain).should('be.visible').wait(500)
    calenderPage.getWeeklyDropdown().select('Weekly')
    calenderPage.getRemainderDetailsInCalender().click()
    calenderPage.getDeleteButton().click()
    calenderPage.getDeleteForEverButton().click()
    
    })


})