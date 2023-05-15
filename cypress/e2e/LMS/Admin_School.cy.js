const adminschoolpage = require('../../support/pageObjects/LMS/admin_Schoolpage.js')
const academicsetuppage = require('../../support/pageObjects/LMS/academicSetUpPage.js')

describe("Admin School Validation", function () {

    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
      })
      beforeEach(function(){
        cy.viewport(1920, 1080)
        cy.fixture("LMS/admin_School").as('academicSetUp')
      })

      it('TC001 Validate thee admin school login',function () {
        adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
        adminschoolpage.getSchoolAcademicSetUp().click()
        adminschoolpage.getAcademicSetUpTittle().should('have.text',this.academicSetUp.academicSetUpTittle)
        cy.wait(2000)
        academicsetuppage.getAddNewBttn().click()
        academicsetuppage.getAddAcademicSetUpPopUpTittle().contains("Academic Year")
        academicsetuppage.getAddAcademicPopUpSelectYearDropdownBttn().click()
        academicsetuppage.getAddAcademicPopUpSelectYearDropdownLists().click()
        academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(0).click()
        academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderArrowRightIcon().click()
        academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
        academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(1).click()
        for(let i=0;i<=5;i++){
          academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderArrowRightIcon().click()
        }
        academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
        academicsetuppage.getAddAcademicPopUpAddBttn().click()
      })

      it("TC002 Validate thee admin school login",function(){

      })
    })