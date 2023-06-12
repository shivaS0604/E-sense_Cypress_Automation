const adminschoolpage = require('../../support/pageObjects/LMS/admin_Schoolpage.js')
const academicsetuppage = require('../../support/pageObjects/LMS/academicSetUpPage.js')
const gradeAndSubjectPage = require('../../support/pageObjects/LMS/academicSetUpGrade&SubjectPage.js')
const admin_Schoolpage = require('../../support/pageObjects/LMS/admin_Schoolpage.js')
const schoolInfrastructuresPage = require('../../support/pageObjects/LMS/schoolInfrastructuresPage')
const curriculumbuilderPage = require('../../support/pageObjects/LMS/curriculumBuilderPage')
const adminaccountsPage = require('../../support/pageObjects/LMS/adminAccountsPage')

describe("Admin School Validation", function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
    cy.fixture("LMS/admin_School").as('academicSetUp')
  })

  it('admin school 001 Verify that School admin can add the new academic year successfully', function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getSchoolAcademicSetUp().click()
    adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
    cy.wait(2000)
    academicsetuppage.getAddNewBttn().click()
    academicsetuppage.getAddAcademicSetUpPopUpTittle().contains("Academic Year")
    // academicsetuppage.getAddAcademicPopUpSelectYearDropdownBttn().click()
    // academicsetuppage.getAddAcademicPopUpSelectYearDropdownLists().eq(0).click()
    // academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(0).click()
    // academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderArrowRightIcon().click()
    // academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
    // academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(1).click()
    // academicsetuppage.getAddAcademicPopUpCalenderYearArrowDropDownIcon().eq(2).click()
    // academicsetuppage.getAddAcademicPopUpCalenderYearArrowDropDownLists().contains('2025').click()
    // academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
    // academicsetuppage.getAddAcademicPopUpAddBttn().click()
  })

  it("admin school 002 Verify that School admin can add the Grades and subject successfully", function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getSchoolAcademicSetUp().click()
    adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
    cy.wait(2000)
    academicsetuppage.getGradeAndAcademicTab().click()
    gradeAndSubjectPage.getGrades().each(($el, index, $List) => {
      var grades = $el.text()
      if (grades === "Grade 5") {
        gradeAndSubjectPage.getSectionAddBtn().eq(index).click()
        gradeAndSubjectPage.getAddNewSectionPopUPTitle().should('have.text', this.academicSetUp.AddNewSectionTitle)
        gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).type(this.academicSetUp.SectionName)
        cy.wait(1000)
        gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).invoke('val').then((text) => {
          var sectext = text
          cy.log(sectext)
          cy.wrap(sectext).as('sectext')
        })
        gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(1).type(this.academicSetUp.NumberOfStudent)
        gradeAndSubjectPage.getOptionalSubjectsDropDownBtn().click()
        gradeAndSubjectPage.getAddNewSectionPopUPOptionalSubjectsLists().click({ multiple: true })
        cy.wait(1000)
        cy.get('body').click(0, 0)
        cy.wait(3000)
        gradeAndSubjectPage.getAddNewSectionPopUPAddSectionBtn().click({force:true})
        cy.wait(2000)
        adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
        gradeAndSubjectPage.getGrades().each(($el, index, $List) => {
          var grades = $el.text()
          if (grades === "Grade 5") {
            gradeAndSubjectPage.getSectionBtn().then((sectionText1) => {
              var sectionText = sectionText1.text()
              cy.log(sectionText)
              cy.get('@sectext').then((sectiontext) => {
                expect(sectiontext).to.eq(sectionText)
              })
            })
          }
        })

      }
    })
    gradeAndSubjectPage.getSectionBtn().click()
    gradeAndSubjectPage.getSectionDeleteBtn().click()
    gradeAndSubjectPage.getSectionDeletePopUpDeleteBtn().click()
    ////////////////////////////////////////////////////////////////////
    gradeAndSubjectPage.getGrades().each(($el, index, $List) => {
      var grades = $el.text()
      if (grades === "Grade 6") {
        gradeAndSubjectPage.getSectionAddBtn().eq(index).click()
        gradeAndSubjectPage.getAddNewSectionPopUPTitle().should('have.text', this.academicSetUp.AddNewSectionTitle)
        gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).type(this.academicSetUp.SectionName)
        cy.wait(1000)
        gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).invoke('val').then((text) => {
          var sectext = text
          cy.log(sectext)
          cy.wrap(sectext).as('sectext')
        })
        gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(1).type(this.academicSetUp.NumberOfStudent)
        gradeAndSubjectPage.getOptionalSubjectsDropDownBtn().click()
        gradeAndSubjectPage.getAddNewSectionPopUPOptionalSubjectsLists().click({ multiple: true })
        cy.wait(1000)
        cy.get('body').click(0, 0)
        cy.wait(1000)
        gradeAndSubjectPage.getAddNewSectionPopUPAddSectionBtn().click()
        cy.wait(2000)
        adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
        gradeAndSubjectPage.getGrades().each(($el, index, $List) => {
          var grades = $el.text()
          if (grades === "Grade 6") {
            gradeAndSubjectPage.getSectionBtn1().then((sectionText1) => {
              var sectionText = sectionText1.text()
              cy.log(sectionText)
              cy.get('@sectext').then((sectiontext) => {
                expect(sectiontext).to.eq(sectionText)
              })
            })
          }
        })
      }
    })
    gradeAndSubjectPage.getSectionBtn1().click()
    gradeAndSubjectPage.getSectionDeleteBtn().click()
    gradeAndSubjectPage.getSectionDeletePopUpDeleteBtn().click()
  })

  it('admin school 003 Verify that School admin can add the School infracture successfully',function(){
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    admin_Schoolpage.getSchoolInfrastructures().click()
    schoolInfrastructuresPage.getInfrastructureTitle().should('have.text',"School Infrastructure")
    schoolInfrastructuresPage.getAddInfrastructureBttn().click()
    schoolInfrastructuresPage.getPopUpAddInfrastructureTitle().should('have.text',"Add Infrastructure")
    schoolInfrastructuresPage.getInfrastructureNameTextField().type("testyantra")
    schoolInfrastructuresPage.getInfrastructureNameTextField().invoke('val').then((text)=>{
      var infrastructurename =text
      cy.wrap(infrastructurename).as('infrastructurename')
    })
    schoolInfrastructuresPage.getNumberofFloorsTextField().type("10")
    schoolInfrastructuresPage.getDiscriptionTextField().type("Good infrastructure")
    schoolInfrastructuresPage.getaddbttn().click()
    cy.wait(1000)
    schoolInfrastructuresPage.getAddInfrastructureInsertedSuccessfully().should('have.text',"Inserted Successfully")
    schoolInfrastructuresPage.getInfrastructureTitle().should('have.text',"School Infrastructure")
    cy.wait(2000)
    schoolInfrastructuresPage.getInfrastructureNameTexts().each(($el,index,$list)=>{
      var infraNames = $el.text()
      if(infraNames === "testyantra"){
        schoolInfrastructuresPage.getAddRoomBttn().eq(index).click()
        schoolInfrastructuresPage.getAddRoomPopUpTitle().should('have.text',"Add Room")
        schoolInfrastructuresPage.getRoomNameTextField().eq(0).type("Kannada")
        schoolInfrastructuresPage.getRoomNameTextField().eq(1).type("1")
        schoolInfrastructuresPage.getGradeDropDownBttn().click()
        schoolInfrastructuresPage.getGradeDropDownLists().contains("Grade 7 - a").click()
        schoolInfrastructuresPage.getRoomNameTextField().eq(2).type("kannada class start at 9:30am in 1 floor")
        schoolInfrastructuresPage.getPopupAddRoomBttn().click()
        schoolInfrastructuresPage.getInfrastructureDeleteIconBtn().eq(index).click()
        schoolInfrastructuresPage.getInfrastructureDeleteBttnPopUp().click()
      
      }
    })
  })


  it("admin school 04 Verify that School admin can create the Curriculum successfully for the Grades selected as part fo license",function(){
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getCurriculumBuilder().click()
    curriculumbuilderPage.getCurriculumBuilderPageTitleText().should('have.text','Curriculum Builder')
    curriculumbuilderPage.getTopSchoolTabText().should('have.text',"TopSchool")
    curriculumbuilderPage.getMySchoolTab().click()
    curriculumbuilderPage.getMySchoolGradesText().each(($el,index,$list)=>{
      let count = $el.length
      for (let i = 0; i <= count; i++) {
        curriculumbuilderPage.getViewDetailsBttn().eq(index).click()
        cy.get('.Pending').eq(index).should('be.visible')
      }
    })
    curriculumbuilderPage.getTopSchoolTabText().click()
    cy.wait(3000)
    curriculumbuilderPage.getAllSelectGradesCheckBox().eq(0).click()
    cy.wait(1000)
    curriculumbuilderPage.getBottomDuplicateBtn().click()
    curriculumbuilderPage.getOverWrightBtn().click()
    curriculumbuilderPage.getSussfullMessage().should('be.visible')
    curriculumbuilderPage.getMySchoolTab().click()
    curriculumbuilderPage.getMySchoolAllSelectGradesCheckBox().eq(0).click()
    curriculumbuilderPage.getMyschlBootomApproveBtn().click()
    curriculumbuilderPage.getMyschlPopUpApproveBtn().click()
    curriculumbuilderPage.getCurriculumApprovePopUpText().should('be.visible')
    curriculumbuilderPage.getCurriculumApproveCloseBtn().click()

    curriculumbuilderPage.getMySchoolGradesText().each(($el1,index,$list)=>{
        curriculumbuilderPage.getViewDetailsBttn().eq(index).click()
        cy.get('.Done').should('be.visible')
        cy.wait(1000)
    })
  })

  it("admin school 04 Verify that School admin can add new Admin accounts successfully with granting access per module required",function(){
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getAdminAccounts().click()
    adminaccountsPage.getAdminAccountText().eq(0).should('have.text','Admin Accounts')
    adminaccountsPage.getAddnewBtn().click()
    adminaccountsPage.getAddNewRolePopUpText().should('contain.text','Add New Role')
    adminaccountsPage.getDesignationNameTextField().type("Teacher")
    adminaccountsPage.getDesignationNameTextField().invoke('val').then((text)=>{
      var designationName = text
      cy.log(designationName)
      cy.wrap(designationName).as('designationName')
    })
    adminaccountsPage.getViewEditApprovalCheckBox().click({multiple:true})
    adminaccountsPage.getAddRolePopUpBtn().click()


  })

})

    //Akshay





