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
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyCalenderTab().click({force:true}).wait(1000)
    teacherCalenderPage.getYourCalenderPage().should('be.visible')
    teacherCalenderPage.getCalender().should('be.visible')
    teacherCalenderPage.getClassInCalender().should('be.visible')
    teacherCalenderPage.getRequestLeaveButton().should('be.visible')
    teacherCalenderPage.getCreateNewButton().should('be.visible')
    teacherCalenderPage.getWeeklyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Monthly')
    teacherCalenderPage.getMonthlyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Daily')
    teacherCalenderPage.getDailyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Weekly')
    teacherCalenderPage.getClassInCalender().click().wait(1000)
    teacherCalenderPage.getAddLessonPlanButton().should('be.visible')
    teacherCalenderPage.getStartSessionButton().should('be.visible')
    teacherCalenderPage.getRescheduleClassButton().should('be.visible')
    teacherCalenderPage.getResourceText().should('be.visible')
    teacherCalenderPage.getNotesAttachedText().should('be.visible')
    teacherCalenderPage.getHomeworkText().should('be.visible')
    teacherCalenderPage.getStudentsText().should('be.visible')
    teacherCalenderPage.getAddHomeWorkButton().click()
    teacherCalenderPage.getAddHomeworkPopup().should('be.visible',{timeout:1000})
    let ran=Math.ceil(Math.random()*10000)
    let homeWorkTitle="Homework"+ran
    let description="Description"+ran
    teacherCalenderPage.getHomeworkTitleTextField().type(homeWorkTitle)
    teacherCalenderPage.getHomeworkDescriptionTextareaField().type(description)
    teacherCalenderPage.getDueTimeButton().click().wait(1000)
    for (let j = 0; j < 2; j++) {
        teacherCommonPage.getBody().type('{downArrow}').wait(500)

    }
    teacherCalenderPage.getAddHomeworkBody().click({ force: true })
    teacherCalenderPage.getApproxTimeRequiredDropdown().click()
    teacherCalenderPage.getApproxTimeRequiredDropdownList('15-30').click()
    teacherCalenderPage.getManageStudentsButton().should('be.visible')
    teacherCalenderPage.getAddAttachFiles().should('be.visible')
    teacherCalenderPage.getSaveButton().click()
    teacherCalenderPage.getHomeworkCreatedMsg().should('be.visible',{timeout:1000})
    teacherCalenderPage.getNotesAttachedViewButton().click()
    teacherCalenderPage.getYourNotesText().should('be.visible')
    teacherCalenderPage.getAddNoteButton().click()
    let notesTitle="Notes"+ran
    let notesDescription="NotesDescription"+ran
    teacherCalenderPage.getAddNotesTitleTextField().type(notesTitle)
    teacherCalenderPage.getAddNotesDescription().type(notesDescription)
    teacherCalenderPage.getBackToNoteList().click().wait(1000)
    teacherCalenderPage.getYourNotesCloseIcon().click()
    teacherCalenderPage.getHomeworkView().click()
    teacherCalenderPage.getDeleteHomeWorkButton().click({force:true})
    teacherCalenderPage.getDeleteButton().click({force:true}).wait(1000)
    teacherCalenderPage.getcloseIcon().click({force:true}).wait(1000)
    teacherCalenderPage.getCancelButton().click()
    teacherCalenderPage.getYourCalenderPage().should('be.visible',{timeout:1000})










    





    
    


})
})
