const adminschoolpage = require('../../support/pageObjects/LMS/admin_Schoolpage.js')
const academicsetuppage = require('../../support/pageObjects/LMS/academicSetUpPage.js')
const gradeAndSubjectPage = require('../../support/pageObjects/LMS/academicSetUpGrade&SubjectPage.js')

describe("Admin School Validation", function () {

    beforeEach(function(){
        cy.visit(Cypress.env("url"))
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        cy.fixture("LMS/admin_School").as('academicSetUp')
    })

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
        academicsetuppage.getAddAcademicPopUpSelectYearDropdownLists().eq(0).click()
        academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(0).click()
        academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderArrowRightIcon().click()
        academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
        academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(1).click()
        academicsetuppage.getAddAcademicPopUpCalenderYearArrowDropDownIcon().eq(2).click()
        academicsetuppage.getAddAcademicPopUpCalenderYearArrowDropDownLists().contains('2025').click()
        academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
        academicsetuppage.getAddAcademicPopUpAddBttn().click()
      })

      it.only("admin school 002 Verify that School admin can add the Grades and subject successfully",function(){
        cy.wait(2000)
        adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
        adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text',this.academicSetUp.AdminSchoolQuickLinkTittle)
        adminschoolpage.getSchoolAcademicSetUp().click()
        adminschoolpage.getAcademicSetUpTittle().should('have.text',this.academicSetUp.academicSetUpTittle)
        cy.wait(2000)
        academicsetuppage.getGradeAndAcademicTab().click()
        gradeAndSubjectPage.getGrades().each(($el,index,$List)=>{
          var grades = $el.text()
          if(grades === "Grade 5"){
            gradeAndSubjectPage.getSectionAddBtn().eq(index).click()
            gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).type(this.academicSetUp.SectionName)
            gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(1).type(this.academicSetUp.NumberOfStudent)
            gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(2).click()
            gradeAndSubjectPage.getAddNewSectionPopUPOptionalSubjectsLists().click({multiple:true})
            cy.wait(2000)
            cy.get('body').click({force:true})
            gradeAndSubjectPage.getAddNewSectionPopUPAddSectionBtn()
          }
        })
        
      })
    })

    //Akshay