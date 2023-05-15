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
           cy.xpath('(//p[contains(text(),"Grade 2")]/ancestor::tr//button[contains(.,"Pending")]//following::img[@aria-label="Edit"])[1]') .click()    
       // ReportDashboardPage.getAdminReportsGradeEditButton("Grade 1").click()
    
        ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text','Basic Template Details')
        ReportDashboardPage.getCreateNewTemplateGradeDropdown().should('have.text','Grade 2')
        ReportDashboardPage.getCreateNewTemplateSectionDropdown().should('have.text', 'A')
        ReportDashboardPage.getCreateNewTemplateNumberOftermsDropdown().click()
        ReportDashboardPage.getCreateNewTemplateSelectNumberOftermsValue().click()
        ReportDashboardPage.getCreateNewTemplatePublishGradebookInDropdown().click()
        ReportDashboardPage.getCreateNewTemplateSelectPublishGradebookInValue().click({force:true})
        ReportDashboardPage.getCreateNewTemplateAddTestTypeButton().click()
        cy.get(':nth-child(4) > .MuiButton-root').click()
        ReportDashboardPage.getCreateNewTemplateTermDropdown().click()
        cy.wait(1000)
        ReportDashboardPage.getCreateNewTemplateTermCheckbox().dblclick()
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
        ReportDashboardPage.getCreateNewTemplateTheoryTextfield().should('have.value','100')
        ReportDashboardPage.getCreateNewTemplatePracticleTextfield().click().type('6')

       ReportDashboardPage.getCreateNewTemplateAddActivityTextfield().type('Drawing')
       ReportDashboardPage.getCreateNewTemplateAddPrincipleSignatureButton().click()
       ReportDashboardPage.getCreateNewTemplateVerifyAddSignatureTxt().should('have.text','Add Signature')
       var ImagePath= "C:\\Users\\user.TYSS-GARIMASAIN\\Pictures\\Screenshots\\6165-manoj-muntashir039s-signature.jpg"
       ReportDashboardPage.getCreateNewTemplateUploadImage().selectFile(ImagePath)
       cy.get('[data-testid="savvBtn"]').click({force:true})
      
       ReportDashboardPage.getCreateNewTemplateSaveAndPreviewBtn().click()
       const SubDetails="display"
       const Co_ScholasticActivities="SportsDrawing"

       ReportDashboardPage.getPreviewScreenSubDetailsText().then((Subjet)=>{
        expect(Subjet.text()).to.equal(SubDetails)
       })

       ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().then((ActivityName)=>{
        expect(ActivityName.text()).to.equal(Co_ScholasticActivities)
      })

      ReportDashboardPage.getPreviewScreenPublishButton().click()
      ReportDashboardPage.getPreviewScreenYesPublishButton().click()
      ReportDashboardPage.getStudentGradeBookTxt().should('have.text','Student Gradebook')
      ReportDashboardPage.getVerifyGradeContainPublishedStatus().should('have.text','Published')
      ReportDashboardPage.getPublishedStatusToggleButton().click()
      cy.wait(1000)
      ReportDashboardPage.getYesUnfinishButton().click()
      //cy.wait(6000)
     // ReportDashboardPage.getVerifyGradebookUnfinishedSuccesfullyTxt().should('have.contains',' Gradebook is unpublished successfully')
      ReportDashboardPage.getVerifyGradeContainDraftStatus().should('have.text','Draft')
      ReportDashboardPage.getDraftStatusToggleButton().click()
      ReportDashboardPage.getPreviewScreenPublishButton().click()
      ReportDashboardPage.getPreviewScreenYesPublishButton().click()
      ReportDashboardPage.getVerifyGradeContainPublishedStatus().should('have.text','Published')
      ReportDashboardPage.getPublishedStatusToggleButton().click()
      cy.wait(1000)
      ReportDashboardPage.getYesUnfinishButton().click()
      ReportDashboardPage.getVerifyGradeContainDraftStatus().should('have.text','Draft')
      ReportDashboardPage.getDraftStatusToggleButton().click()
      ReportDashboardPage.getPreviewScreenPublishButton().click()
      ReportDashboardPage.getPreviewScreenYesPublishButton().click()
      ReportDashboardPage.getVerifyGradeContainPublishedStatus().should('have.text','Published')
      ReportDashboardPage.getPublishedStatusToggleButton().click()
      cy.wait(1000)
      ReportDashboardPage.getYesUnfinishButton().click()


      ReportDashboardPage.getDeleteButton().click()
      cy.xpath('//span[contains(.,"Delete")]').click()





    


    })
    //author - manoj
})