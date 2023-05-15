const ReportDashboardPage=require('../../support/pageObjects/LMS/adminReportPage')

describe('Validate Admin Edited the Gradebook Template Successfully',function(){

    before(function(){
        cy.visit(Cypress.env("url"))
        cy.viewport(1920,1080)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
    })

    it('Verify that School Admin can Edit the TopSchool Gradebook Template',function(){
        ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
        ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible',{timeout:2000}).click({force:true})
        cy.wait(2000)
        ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text','Student Gradebook')
        ReportDashboardPage.getAdminReportsGradeEditButton("Grade 1").click()
    
        ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text','Basic Template Details')
        ReportDashboardPage.getCreateNewTemplateGradeDropdown().should('have.text','Grade 1')
        ReportDashboardPage.getCreateNewTemplateSectionDropdown().should('have.text', 'A')
        ReportDashboardPage.getCreateNewTemplateNumberOftermsDropdown().click()
        ReportDashboardPage.getCreateNewTemplateSelectNumberOftermsValue().click()
        ReportDashboardPage.getCreateNewTemplatePublishGradebookInDropdown().click()
        ReportDashboardPage.getCreateNewTemplateSelectPublishGradebookInValue().click({force:true})
        ReportDashboardPage.getCreateNewTemplateAddTestTypeButton().click()
        cy.get(':nth-child(4) > .MuiButton-root').click()
        ReportDashboardPage.getCreateNewTemplateTermDropdown().click()
        ReportDashboardPage.getCreateNewTemplateTermCheckbox().click()
        cy.get('body').click()
        ReportDashboardPage.getCreateNewTemplateTestTypeDropdown().click()
        ReportDashboardPage.getCreateNewTemplateSelectTestTypeValue().click()
        ReportDashboardPage.getCreateNewTemplateMaxMarksDropdown().click()
        ReportDashboardPage.getCreateNewTemplateSelectMaxMarksValue().click()

        ReportDashboardPage.getCreateNewTemplateAddSubjectButton().click()
        ReportDashboardPage.getCreateNewTemplateSubjectDropdown().click()
        ReportDashboardPage.getCreateNewTemplateSelectSubjectvalue().click()

        ReportDashboardPage.getCreateNewTemplateAddTheoryAndPracticleButton().click()
        ReportDashboardPage.getAddTheoryAndPracticleTestTypeDropdown().click({force:true})
        ReportDashboardPage.getAddTheoryAndPracticleTestTypeValue().click()
        ReportDashboardPage.getCreateNewTemplateTheoryTextfield().should('have.value','15')
        ReportDashboardPage.getCreateNewTemplatePracticleTextfield().click().type('6')

        ReportDashboardPage.getCreateNewTemplateAddActivityTextfield().type('Drawing')
       ReportDashboardPage.getCreateNewTemplateAddPrincipleSignatureButton().click()
       ReportDashboardPage.getCreateNewTemplateVerifyAddSignatureTxt().should('have.text','Add Signature')
      var ImagePath= "C:\\Users\\user.TYSS-GARIMASAIN\\Pictures\\Screenshots\\6165-manoj-muntashir039s-signature.jpg"
      ReportDashboardPage.getCreateNewTemplateUploadImage().selectFile(ImagePath)
      cy.get('[data-testid="savvBtn"]').click({force:true})


    })
    //author - manoj
})