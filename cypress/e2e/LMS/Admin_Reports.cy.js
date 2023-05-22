const adminReportPage = require('../../support/pageObjects/LMS/adminReportPage')
const ReportDashboardPage = require('../../support/pageObjects/LMS/adminReportPage')
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")


describe('Admin Report Validation', function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })

    cy.fixture('GradeBook_templateDetails').as('TemplateDetails')
  })

  it('Tc_001 Verify that School Admin can Edit the TopSchool Gradebook Template', function () {
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getAdminReportsGradeEditButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text', this.TemplateDetails.BasicTemplateDetailsText)
    ReportDashboardPage.getCreateNewTemplateGradeDropdown().should('have.text', this.TemplateDetails.Grade)
    ReportDashboardPage.getCreateNewTemplateSectionDropdown().should('have.text', this.TemplateDetails.section)
    ReportDashboardPage.getCreateNewTemplateNumberOftermsDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectNumberOftermsValue().click()
    ReportDashboardPage.getCreateNewTemplatePublishGradebookInDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectPublishGradebookInValue().click({ force: true })
    ReportDashboardPage.getCreateNewTemplateAddTestTypeButton().click()
    ReportDashboardPage.getDelButton().click()
    ReportDashboardPage.getCreateNewTemplateTermDropdown().click().wait(1000)
    ReportDashboardPage.getCreateNewTemplateTermCheckbox().dblclick()
    cy.get('body').click()
    ReportDashboardPage.getCreateNewTemplateTestTypeDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateMaxMarksDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectMaxMarksValue().click()
    ReportDashboardPage.getCreateNewTemplateAddSubjectButton().click()
    cy.get(':nth-child(2) > .CreateNewTemplate_crtNewTempAddThyContr__1H9Jb > .MuiButton-root > img').click()
    ReportDashboardPage.getCreateNewTemplateSubjectDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectSubjectvalue().click()
    ReportDashboardPage.getCreateNewTemplateAddTheoryAndPracticleButton().click()
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeDropdown().click({ force: true })
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateTheoryTextfield().should('have.value', this.TemplateDetails.Theory)
    ReportDashboardPage.getCreateNewTemplatePracticleTextfield().click().type(this.TemplateDetails.Practicle)
    ReportDashboardPage.getCreateNewTemplateAddActivityTextfield().type(this.TemplateDetails.AddActivityName)
    ReportDashboardPage.getCreateNewTemplateAddPrincipleSignatureButton().click()
    ReportDashboardPage.getCreateNewTemplateVerifyAddSignatureTxt().should('have.text', this.TemplateDetails.AddSignatureTxt)
    ReportDashboardPage.getCreateNewTemplateUploadImage().selectFile(this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getSaveButton().click({ force: true })
    ReportDashboardPage.getCreateNewTemplateSaveAndPreviewBtn().click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getStudentGradeBookTxt().should('have.text', this.TemplateDetails.StudentGradeBookTxt)
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    //cy.wait(6000)
    // ReportDashboardPage.getVerifyGradebookUnfinishedSuccesfullyTxt().should('have.contains',' Gradebook is unpublished successfully')
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()
  })



  it('Tc_002 Verify that School Admin can Create the Gradebook Template', function () {

    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getAdminReportsGradeViewButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getCreateNewButton().click()
    ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text', this.TemplateDetails.BasicTemplateDetailsText)
    ReportDashboardPage.getCreateNewTemplateGradeDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectGradeDropdownValue().contains(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getCreateNewTemplateSectionDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectSectionDropdownValue().contains(this.TemplateDetails.section).click()
    cy.get('body').click()
    ReportDashboardPage.getCreateNewTemplateNumberOftermsDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectNumberOftermsValue().click()
    ReportDashboardPage.getCreateNewTemplatePublishGradebookInDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectPublishGradebookInValue().click({ force: true })
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getCreateNewTemplateAddTestTypeButton().click()
    ReportDashboardPage.getCreateNewTemplateTermDropdown().click().wait(1000)
    ReportDashboardPage.getCreateNewTemplateTermCheckbox().click()
    cy.get('body').click()
    ReportDashboardPage.getCreateNewTemplateTestTypeDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateMaxMarksDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectMaxMarksValue().click()
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getCreateNewTemplateAddSubjectButton().click()
    ReportDashboardPage.getCreateNewTemplateSubjectDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectSubjectvalue().click()
    ReportDashboardPage.getCreateNewTemplateAddTheoryAndPracticleButton().click()
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeDropdown().click({ force: true })
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateTheoryTextfield().should('have.value', this.TemplateDetails.Theory)
    ReportDashboardPage.getCreateNewTemplatePracticleTextfield().click().type(this.TemplateDetails.Practicle)
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getAddActivityButton().click()
    ReportDashboardPage.getCreateNewTemplateAddActivityTextfield().type(this.TemplateDetails.AddActivityName)
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getCreateNewTemplateAddPrincipleSignatureButton().click()
    ReportDashboardPage.getCreateNewTemplateVerifyAddSignatureTxt().should('have.text', this.TemplateDetails.AddSignatureTxt)
    ReportDashboardPage.getCreateNewTemplateUploadImage().selectFile(this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getSaveButton().click({ force: true })
    ReportDashboardPage.getCreateNewTemplateSaveAndPreviewBtn().click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getStudentGradeBookTxt().should('have.text', this.TemplateDetails.StudentGradeBookTxt)
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()

  })


  it('Tc_003 Verify that School Admin can Delete the Gradebook Template', function () {
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)

    adminReportPage.CreateNewTemplate(this.TemplateDetails.Grade, this.TemplateDetails.section, this.TemplateDetails.Practicle, this.TemplateDetails.AddActivityName, this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('not.be.enabled')
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    adminReportPage.CreateNewTemplate(this.TemplateDetails.Grade, this.TemplateDetails.section, this.TemplateDetails.Practicle, this.TemplateDetails.AddActivityName, this.TemplateDetails.SignatureFile)
    adminReportPage.getGradeCheckBoxStudentGradeBookPage(this.TemplateDetails.Grade).click()
    adminReportPage.getDeleteIconStudentGradeBookPage().click()
    ReportDashboardPage.getDeleteButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('not.be.enabled')
    dashboard.logout()
    cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
      cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
    })
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click({ force: true }).wait(2000)
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    cy.contains('No Data Found!').contains('No Data Found!')
  })


  it('Tc_004 Verify that School Admin can view the Gradebook Template', function () {

    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getGradeDraftStatusViewIcon(this.TemplateDetails.Grade2).click()
    ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text', this.TemplateDetails.BasicTemplateDetailsText)
    ReportDashboardPage.getPreviewButton().click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click({ force: true })
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade2).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade2).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade2).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade2).click().wait(1000)
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click({ force: true })
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade2).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade2).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click().wait(2000)

    adminReportPage.CreateNewTemplate(this.TemplateDetails.Grade, this.TemplateDetails.section, this.TemplateDetails.Practicle, this.TemplateDetails.AddActivityName, this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click().wait(1000)
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click().wait(1000)
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')

    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()

  })



  it('Tc_005 Verify that School Admin can search and select filters in template  Template', function () {

    // pre condition --- Create student
    cy.get('div.side-nav-bar ').invoke('show').contains('Users').click()
    cy.xpath('//button[contains(.,"Students")]').click()
    cy.get('div[aria-label="Add student(s)"]').click()
    cy.get('#fullName').click().type('kumar')
    cy.get('//label[contains(.,"Gender*"")]').click()
    cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"] li').contains('Male').click()
    cy.get('//label[contains(.,"Contact Number*"")] ').eq(0).click().type('9999999999')
    cy.get('//label[contains(.,"Select Relation*"")] ').click()









    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)

    ReportDashboardPage.getSearchTextfield().type('Grade 1')
    ReportDashboardPage.getGradesList().contains('Grade 1')// validation doubrt

    ReportDashboardPage.getAllDropdown().click()
    ReportDashboardPage.getTopSchoolBtn().click()

    ReportDashboardPage.getGradesList().each(($element) => {
      var grades = $element.text()
      if (grades.includes('Grade 10') || grades.includes('Grade 11') || grades.includes('Grade 12')) {
        ReportDashboardPage.getGradesList().should('be.visible')
      }
    })

    ReportDashboardPage.getAllDropdown().click()
    ReportDashboardPage.getMySchoolBtn().click()
    ReportDashboardPage.getGradesList().contains('Grade 1') // validation doubrt

  })

  it.only('Tc_006 Verify that School Admin can Add results for respective students', function () {

    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)

    ReportDashboardPage.getGradeBookTab().click()
    ReportDashboardPage.getGradeBookPagePendingStatus().should('be.visible')
    cy.get('tr[class="MuiTableRow-root MuiTableRow-hover css-1gqug66"] td:nth-child(4)').each(($element, index) => {
      if ($element.text() == 'kumar') {
       ReportDashboardPage. getArrowForwordIcon().eq(index).click()
      }
    })
    ReportDashboardPage.getEditButton().click()
    ReportDashboardPage.getTheoryTextField().click().wait(1000).type(80)
    ReportDashboardPage.getPracticleTextfield().click().wait(1000).type(20)

    ReportDashboardPage.getCoScholasticActivities1_TxtField().next().type(1)
    ReportDashboardPage.getCoScholasticActivities2_TxtField().next().type(2)
    ReportDashboardPage.getCoScholasticActivities3_TxtField().next().type(3)
    ReportDashboardPage.getCoScholasticActivities4_TxtField().next().type(4)
    ReportDashboardPage.getRemarksTextfield().type('hskhsagc')
    ReportDashboardPage.getTotalPercentage().should('be.visible')
    ReportDashboardPage.getResult().should('be.visible')
    ReportDashboardPage.getSaveBtn().click()

    ReportDashboardPage.getUpdatedStatus().should('be.visible')

    cy.get('tr[class="MuiTableRow-root MuiTableRow-hover css-1gqug66"] td:nth-child(4)').each(($element, index) => {
      if ($element.text() == 'kumar') {
        ReportDashboardPage.getArrowForwordIcon().eq(index).click()
      }
    })
    ReportDashboardPage.getEditButton().click()
    ReportDashboardPage.getSaveBtn().click()

    cy.get('tr[class="MuiTableRow-root MuiTableRow-hover css-1gqug66"] td:nth-child(4)').each(($element, index) => {
      if ($element.text() == 'kumar') {
       ReportDashboardPage. getArrowForwordIcon().eq(index).click()
      }
    })

    ReportDashboardPage.getShowGradingSystemDropdown().click()
  
    /// This step not done =>> Admin can able to see the Grade system
    cy.xpath('//button[contains(.,"Preview & Print")]').click({force:true}).wait(2000)
    cy.get('[class="MuiTypography-root MuiTypography-body1 css-9hthsz"] div[class="MuiBox-root css-k4h52c"]').should('be.visible')
    cy.get('body').click()


    ReportDashboardPage.getPreviewScreenPublishButton().click({force:true})
    cy.get('[data-testid="primaryBtn"]').click()
    //ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPublishedStatus().should('be.visible')

    dashboard.logout()
    cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
      cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
    })

    cy.get('div.side-nav-bar ').invoke('show').contains('My Classes').click({force:true})
    cy.get('[class="content-popover_border"] [class="popover-arrow"]',{timeout:2000}).click({force:true})
    cy.xpath('//button[contains(.,"Assessments")]').click({force:true}).wait(1000)
    cy.xpath('//button[contains(.,"ELAs")]').should('be.visible').wait(1000)
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click({force:true})
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })

    cy.get('tr[class="MuiTableRow-root MuiTableRow-hover css-1gqug66"] td:nth-child(4)').each(($element, index) => {
      if ($element.text() == 'kumar') {
        ReportDashboardPage.getStudentResult().should('be.visible')

      }
    })














  })









  //author - manoj
})