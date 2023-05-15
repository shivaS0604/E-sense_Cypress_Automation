const adminschoolpage = require('../../support/pageObjects/LMS/admin_Schoolpage.js')
const academicsetuppage = require('../../support/pageObjects/LMS/academicSetUpPage.js')

describe("Admin School Validation", function () {

    beforeEach(function(){
        cy.visit(Cypress.env("url"))
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        cy.fixture("LMS/admin_School").as('academicSetUp')
    })
      
    // before(function () {
    //     cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
    //       cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    //     })
    //   })

      it('admin school 001 Verify that School admin can add the new academic year successfully',function () {
        cy.wait(2000)
        adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
        adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text',this.academicSetUp.AdminSchoolQuickLinkTittle)
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
          academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderArrowRightIcon().as('RightArrowBtn')
          cy.get('@RightArrowBtn').click()
        }
        academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
        academicsetuppage.getAddAcademicPopUpAddBttn().click()
      })

      it("admin school 002 Verify that School admin can add the Grades and subject successfully",function(){
        cy.wait(2000)
        adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
        adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text',this.academicSetUp.AdminSchoolQuickLinkTittle)
        adminschoolpage.getSchoolAcademicSetUp().click()
        adminschoolpage.getAcademicSetUpTittle().should('have.text',this.academicSetUp.academicSetUpTittle)
        cy.wait(2000)
        academicsetuppage.getGradeAndAcademicTab().click()
      })
    })

    //Akshay