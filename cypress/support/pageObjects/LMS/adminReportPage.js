class AdminReportPage{

    getAdminReportsSideMenubarReportTab(){
        return  cy.get('div.side-nav-bar ').invoke('show').contains('Reports')
    }

    getAdminReportsStudentGradebookTab(){
        return cy.get('div[class="content-popover-reports"]').eq(0)
    }

    getAdminReportsVerifyStudentGradebookText(){
        return cy.contains('Student Gradebook')
    }

    getAdminReportsGradeEditButton(Grades){
        cy.xpath('(//p[contains(text(),"'+Grades+'")]/ancestor::tr//button[contains(.,"Pending")]//following::img[@aria-label="Edit"])[1]')
    }

    getAdminReportsVerifyBasicTemplateDetailsText(){
        return  cy.contains('Basic Template Details')

    }

    getCreateNewTemplateGradeDropdown(){
        return cy.get('div#demo-simple-select-helper').eq(0)
    }

    getCreateNewTemplateSectionDropdown(){
   return cy.get('[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiOutlinedInput-input"]').eq(0)
    }

    getCreateNewTemplateNumberOftermsDropdown(){
        return cy.get('div#demo-simple-select-helper').eq(1)
    }

    getCreateNewTemplateSelectNumberOftermsValue(){
        return cy.get('li[data-value="1"]')
    }

    getCreateNewTemplatePublishGradebookInDropdown(){
        return cy.get('div#demo-simple-select-helper').eq(2)
    }

    getCreateNewTemplateSelectPublishGradebookInValue(){
       return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Mark')
    }

    getCreateNewTemplateAddTestTypeButton(){
    return cy.contains('+ Add Test Type')
    }

    getCreateNewTemplateTermDropdown(){
        return cy.get('div#mui-component-select-testType')
    }

    getCreateNewTemplateTermCheckbox(){
        return cy.get('li[data-value="1"]')
    }

    getCreateNewTemplateTestTypeDropdown(){
        return cy.get('div#demo-simple-select-helper').eq(3)
 
    }

    getCreateNewTemplateSelectTestTypeValue(){
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Test 1')
    }

    getCreateNewTemplateMaxMarksDropdown(){
        return cy.get('div#demo-simple-select-helper').eq(4)
    }

    getCreateNewTemplateSelectMaxMarksValue(){
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('100')
    }

    getCreateNewTemplateAddSubjectButton(){
        return cy.contains(' + Add Subject ')
    }

    getCreateNewTemplateSubjectDropdown(){
        return cy.get('div#mui-component-select-subject')
    }

    getCreateNewTemplateSelectSubjectvalue(){
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"] li').eq(0)
    }

    getCreateNewTemplateAddTheoryAndPracticleButton(){
        return cy.contains('+ Add Theory and Practical')
    }

    getAddTheoryAndPracticleTestTypeDropdown(){
        return cy.get('.CreateNewTemplate_crtNewTempCodeSubInner__1YOJm > .adminTempContSelctFild > .MuiInputBase-root > #demo-simple-select-helper')
    }

    getAddTheoryAndPracticleTestTypeValue(){
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Test 1')
    }

    getCreateNewTemplateTheoryTextfield(){
        return cy.get('input[name="theoryMarks"]')
    }

    getCreateNewTemplatePracticleTextfield(){
        return cy.get('input[name="practicalMarks"]')
    }

    getCreateNewTemplateAddActivityTextfield(){
        return cy.get('input[name="activity"]')
    }

    getCreateNewTemplateAddPrincipleSignatureButton(){
        return cy.contains("Add Principal's Signature")
    }

    getCreateNewTemplateVerifyAddSignatureTxt(){
        return cy.contains('Add Signature')
    }

    getCreateNewTemplateUploadImage(){
        return cy.get('.fileimages > input')
    }

    getCreateNewTemplateSaveAndPreviewBtn(){
        return cy.xpath("//button[contains(.,'Save And Preview')]")
    }

    getPreviewScreenSubDetailsText(){
        return cy.get('[title="display"]')
    }

    getPreviewScreenCoScholasticActivitiesTxt(){
        return cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)')
    }

    getPreviewScreenPublishButton(){
        return cy.xpath('//button[contains(.,"Publish")]')
    }

    getPreviewScreenYesPublishButton(){
        return cy.xpath('//button[contains(.,"Yes, Publish")]')
    }

    getStudentGradeBookTxt(){
        return cy.xpath('//p[contains(.,"Student Gradebook")]')
    }

    getVerifyGradeContainPublishedStatus(Grades){
       return cy.xpath('//p[contains(text(),"'+Grades+'")]/ancestor::tr/descendant::td[contains(.,"Published")]')
    }

    getPublishedStatusToggleButton(Grades){
        return cy.xpath('//p[contains(text(),"'+Grades+'")]/ancestor::tr/descendant::td[contains(.,"Published")]/../descendant::span[@class="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9"]')
    }

    getYesUnfinishButton(){
        return cy.xpath('//span[contains(.,"Yes, Unpublish")]')
    }

    getVerifyGradebookUnfinishedSuccesfullyTxt(){
        return cy.get('div[class="font-cls"]')
    }

    getVerifyGradeContainDraftStatus(Grades){
        return cy.xpath('//p[contains(text(),"'+Grades+'")]/ancestor::tr/descendant::td[contains(.,"Draft")]')
    }

    getDraftStatusToggleButton(Grades){
        return cy.xpath('//p[contains(text(),"'+Grades+'")]/ancestor::tr/descendant::td[contains(.,"Draft")]/../descendant::span[@class="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9"]')
    }

    getDeleteButton(Grades){
        return cy.xpath('//p[contains(text(),"'+Grades+'")]/ancestor::tr/descendant::td[contains(.,"Draft")]/../descendant::img[@aria-label="Delete"]')
    }





}

module.exports=new AdminReportPage()

