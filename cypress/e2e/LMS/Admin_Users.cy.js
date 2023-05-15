const adminUsersPage = require('../../support/pageObjects/LMS/adminUsersPage')
const dayjs = require('dayjs')

describe("Admin Users Validation", function () {

    beforeEach(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username,validAdminLoginData.password)
        })
        cy.fixture("LMS/TeacherDetails.json").as('techerDetails')
      })
      

      it('TC_US_001 Verify that School admin can add Teachers successfully when entered a valid data',  function () {
        adminUsersPage.getAdminUsersSideMenuTab().click({force:true})
        adminUsersPage.getAdminUsersTeachersTab().click()
        adminUsersPage.getAdminUsersAddTeacherBtn().should('be.visible',{timeout:4000}).click()
        adminUsersPage.getAdminAddNewTeacherAccountFullNameTxt().type(this.techerDetails.fullname)
        adminUsersPage.getAdminAddNewTeacherAccountEmailTxt().type(this.techerDetails.teacherMail)
        adminUsersPage.getAdminAddNewTeacherAccountDateOfBirthIcon().click()
        var day = dayjs().format('D') - 1
        adminUsersPage.getAdminAddNewTeacherAccountDateOfBirthDateBtn(day).click()
        adminUsersPage.getAdminAddNewTeacherAccountGenderDropdown().click()
        adminUsersPage.getAdminAddNewTeacherAccountGenderDropdownMaleOpt().should('be.visible',{timeout:2000}).click()
        adminUsersPage.getAdminAddNewTeacherAccountContactNumberTxt().type(this.techerDetails.phoneNumber)
        adminUsersPage.getAdminAddNewTeacherAccountAddressLineTxt().type(this.techerDetails.adress)
        adminUsersPage.getAdminAddNewTeacherAccountPineCodeTxt().type(this.techerDetails.pineCode).wait(5000)
        adminUsersPage.getAdminAddNewTeacherAccountBasicDetailsContinueBtn().click()
        adminUsersPage.getAdminAddNewTeacherAccountAcademicDetailsDepartmentDropdown().click()
        adminUsersPage.getAdminAddNewTeacherAccountAcademicDetailsDepartmentDropdownOpt().first().click()
        adminUsersPage.getAdminAddNewTeacherAccountAcademicDetailsBranchDropdown().click()
        adminUsersPage.getAdminAddNewTeacherAccountAcademicDetailsBranchDropdownOpt().first().click()
        adminUsersPage.getAdminAddNewTeacherAccountAcademicDetailsDepartmentDropdown().click({force:true})
        adminUsersPage.getAdminAddNewTeacherAccountAcademicDetailsContineBtn().click({force:true})
        adminUsersPage.getAdminAddNewTeacherAccountGradeSectionSelectGradeDropdown().click()
        adminUsersPage.getAdminAddNewTeacherAccountGradeSectionSelectGradeDropdownOpt().first().click()
        cy.get('body').click()
        adminUsersPage.getAdminAddNewTeacherAccountGradeSectionSelectGradeCheckBox().check()
        adminUsersPage.getAdminAddNewTeacherAccountGradeSectionClassTeacherRedioBtn().click()
        adminUsersPage.getAdminAddNewTeacherAccountGradeSectionSelectSubjectsDropdown().click()
        adminUsersPage.getAdminAddNewTeacherAccountGradeSectionSelectSubjectsDropdownOpt().first().click()
        adminUsersPage.getAdminAddNewTeacherAccountSubjectsAndSectionsContineBtn().click({force:true})
        cy.contains(this.techerDetails.ConfermationMessage).should('be.visible')
        adminUsersPage.getTeacherDeleteBtn(this.techerDetails.fullname).click()
        adminUsersPage.getTeacherDeleteAccountBtn().click()
        adminUsersPage.getTeacherConfermationPopupDeleteBtn().click()
      })

      it('TC_US_002 Verify that School admin can add Teachers successfully with bulk upload of data',function(){
        adminUsersPage.getAdminUsersSideMenuTab().click({force:true})
        adminUsersPage.getAdminUsersTeachersTab().click()
        adminUsersPage.getTeacherBulkUploadBtn().click()
        cy.contains('Upload Teacher Accounts in bulk').should('be.visible')
        adminUsersPage.getTeacherUploadTeacherAccountsinbulkDownloadSampleFileLink().should('be.visible')
        adminUsersPage.getTeacherUploadTeacherAccountsinbulkSelectFileFromComputerBtn().selectFile('LMS/users_Teacher_15-05-2023 10_19_39.xlsx',{force:true})
        adminUsersPage.getTeacherUploadTeacherAccountsinbulkImportTeacherAccounts().should('be.visible',{timeout:2000}).click()
        cy.contains('Teacher Accounts Imported successfully').should('be.visible')
        adminUsersPage.getTeacherDeleteBtn(techerDetails.fullname).click()
        adminUsersPage.getTeacherDeleteAccountBtn().click()
        adminUsersPage.getTeacherConfermationPopupDeleteBtn().click()

    })

})