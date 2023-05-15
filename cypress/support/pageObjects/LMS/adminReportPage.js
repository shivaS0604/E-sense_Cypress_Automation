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
        // return cy.xpath('//p[contains(text(),"Grade 1")]/ancestor::tr//img[@aria-label="Edit"]')
        return cy.xpath('//p[contains(text(),"'+Grades+'")]/ancestor::tr//img[@aria-label="Edit"]')

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
        return cy.get('input[type="checkbox"]')
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
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('15')
    }
    getCreateNewTemplateAddSubjectButton(){
        return cy.contains(' + Add Subject ')
    }
    getCreateNewTemplateSubjectDropdown(){
        return cy.get('div#mui-component-select-subject')
    }
    getCreateNewTemplateSelectSubjectvalue(){
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Indian Constitution')
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


}

module.exports=new AdminReportPage()