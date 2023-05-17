//X-path plugin
require('cypress-xpath');

import cypress from 'cypress';
// File-Upload Plugin
import 'cypress-file-upload';


//To handle Uncaught Exception
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(`Caught at: ${runnable.title}\n`, err)
  return false
})

//To Login As Admin
const login = require('./pageObjects/LMS/adminIndexPage')
Cypress.Commands.add('adminLogin', (email, password) => {
  login.getLoginAsAdminBtn().click()
  login.getUserNameTxtFld().clear().type(email)
  login.getPasswordTxtFld().clear().type(password)
  login.getLogInBtn().click().wait(2000)
  cy.url().should('contain', 'dashboard').wait(1000)
})

//To Login As Teacher
const teacherLogin = require('./pageObjects/LMS/adminIndexPage')
Cypress.Commands.add('teacherLogin', (email, password) => {
  teacherLogin.getLoginAsTeacherBtn().click()
  teacherLogin.getUserNameTxtFld().clear().type(email)
  teacherLogin.getPasswordTxtFld().clear().type(password)
  teacherLogin.getLogInBtn().click().wait(2000)
  cy.url().should('contain', 'dashboard').wait(1000)
})

//To Create Template
// const ReportDashboardPage=require('./pageObjects/LMS/adminReportPage')
// cypress.Commands.add('CreateNewTemplate',(Practicle, AddActivityName, SignatureFile)=>{
//   ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
//   ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible',{timeout:2000}).click({force:true})
//   ReportDashboardPage.getCreatetemplateButton().click()
//   ReportDashboardPage.getCreateNewTemplateGradeDropdown().click()
//   ReportDashboardPage.getCreateNewTemplateSelectGradeDropdownValue().click()
//   ReportDashboardPage.getCreateNewTemplateSectionDropdown().click()
//   ReportDashboardPage.getCreateNewTemplateSelectSectionDropdownValue().click()
//   cy.get('body').click()
//   ReportDashboardPage.getCreateNewTemplateNumberOftermsDropdown().click()
//   ReportDashboardPage.getCreateNewTemplateSelectNumberOftermsValue().click()
//   ReportDashboardPage.getCreateNewTemplatePublishGradebookInDropdown().click()
//   ReportDashboardPage.getCreateNewTemplateSelectPublishGradebookInValue().click({force:true})
//   ReportDashboardPage.getCountinueButton().click()
//   ReportDashboardPage.getCreateNewTemplateAddTestTypeButton().click()
//   ReportDashboardPage.getCreateNewTemplateTermDropdown().click().wait(1000)
//   ReportDashboardPage.getCreateNewTemplateTermCheckbox().click()
//   cy.get('body').click()
//   ReportDashboardPage.getCreateNewTemplateTestTypeDropdown().click()
//   ReportDashboardPage.getCreateNewTemplateSelectTestTypeValue().click()
//   ReportDashboardPage.getCreateNewTemplateMaxMarksDropdown().click()
//   ReportDashboardPage.getCreateNewTemplateSelectMaxMarksValue().click()
//   ReportDashboardPage.getCountinueButton().click()
//   ReportDashboardPage.getCreateNewTemplateAddSubjectButton().click()
//    ReportDashboardPage.getCreateNewTemplateSubjectDropdown().click()
//    ReportDashboardPage.getCreateNewTemplateSelectSubjectvalue().click()
//    ReportDashboardPage.getCreateNewTemplateAddTheoryAndPracticleButton().click()
//    ReportDashboardPage.getAddTheoryAndPracticleTestTypeDropdown().click({force:true})
//    ReportDashboardPage.getAddTheoryAndPracticleTestTypeValue().click()
//    ReportDashboardPage.getCreateNewTemplatePracticleTextfield().click().type(Practicle)
//    ReportDashboardPage.getCountinueButton().click()
//    ReportDashboardPage.getAddActivityButton().click()
//    ReportDashboardPage.getCreateNewTemplateAddActivityTextfield().type(AddActivityName)
//    ReportDashboardPage.getCountinueButton().click()
//    ReportDashboardPage.getCreateNewTemplateAddPrincipleSignatureButton().click()
//    ReportDashboardPage.getCreateNewTemplateUploadImage().selectFile(SignatureFile)
//    ReportDashboardPage.getSaveButton().click({force:true})
// })





