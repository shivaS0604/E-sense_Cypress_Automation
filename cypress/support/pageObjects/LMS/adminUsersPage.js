class adminUsersPage{

    getAdminUsersSideMenuTab(){
        return cy.get('div[class="menu-txt"]').contains('Users')
    }

    getAdminUsersTeachersTab(){
        return cy.get('button.MuiTab-root').contains('Teachers')
    }

    getAdminUsersAddTeacherBtn(){
        return cy.get('div.TeacherDashboard_AddUserIcon__2LG5j')
    }

    getAdminAddNewTeacherAccountFullNameTxt(){
        return cy.get('input[name="fullName"]')
    }

    getAdminAddNewTeacherAccountEmailTxt(){
        return cy.get('input[name="email"]')
    }

    getAdminAddNewTeacherAccountDateOfBirthIcon(){
        return cy.get('svg[data-testid="CalendarIcon"]')
    }

    getAdminAddNewTeacherAccountDateOfBirthDateBtn(Day){
        return cy.get('div[role="cell"]').contains(Day)
    }

    getAdminAddNewTeacherAccountGenderDropdown(){
        return cy.get('div[id="mui-component-select-gender"]')
    }

    getAdminAddNewTeacherAccountGenderDropdownMaleOpt(){
        return cy.get('li[data-value="M"]')
    }

    getAdminAddNewTeacherAccountContactNumberTxt(){
        return cy.get('input[name="contact"]')
    }

    getAdminAddNewTeacherAccountAddressLineTxt(){
        return cy.get('input[name="address_one"]')
    }

    getAdminAddNewTeacherAccountPineCodeTxt(){
        return cy.get('input[name="pincode"]')
    }

    getAdminAddNewTeacherAccountBasicDetailsContinueBtn(){
        return cy.get('button.continue-btn-cls')
    }

    getAdminAddNewTeacherAccountAcademicDetailsDepartmentDropdown(){
        return cy.get('div.schAdminSelctCtr.css-13sljp9')
    }

    getAdminAddNewTeacherAccountAcademicDetailsDepartmentDropdownOpt(){
        return cy.get('li.MuiMenuItem-gutters')
    }

    getAdminAddNewTeacherAccountAcademicDetailsBranchDropdown(){
        return cy.get('div.schAdminSelctCtr.css-tzsjye')
    }

    getAdminAddNewTeacherAccountAcademicDetailsBranchDropdownOpt(){
        return cy.get('span.MuiListItemText-primary')
    }

    getAdminAddNewTeacherAccountAcademicDetailsContineBtn(){
        return cy.get('div.continue-btn')
    }

    getAdminAddNewTeacherAccountGradeSectionSelectGradeDropdown(){
        return cy.get('div[id="opt-subjects"]')
    }

    getAdminAddNewTeacherAccountGradeSectionSelectGradeDropdownOpt(opt){
        return cy.get('span.MuiListItemText-primary').contains(opt)
    }

    getAdminAddNewTeacherAccountGradeSectionSelectGradeCheckBox(){
        return cy.get('div.left-cls span input')
    }

    getAdminAddNewTeacherAccountGradeSectionClassTeacherRedioBtn(){
        return cy.get('div[class="radio-button-cls-custom"]')
    }

    getAdminAddNewTeacherAccountGradeSectionSelectSubjectsDropdown(){
        return cy.get('div[id="opt-subjects"]').eq(1)
    }

    getAdminAddNewTeacherAccountGradeSectionSelectSubjectsDropdownOpt(){
        return cy.get('span.MuiListItemText-primary')
    }

    getAdminAddNewTeacherAccountSubjectsAndSectionsContineBtn(){
        return cy.get('button.continue-btn ')
    }


    getTeacherDeleteBtn(teachername){
        return cy.xpath('//p[text()="'+teachername+'"]/ancestor::tr//button[@aria-label="Delete Teacher"]')
    }

    getTeacherEditBtn(teachername){
        return cy.xpath('//p[text()="'+teachername+'"]/ancestor::tr//button[@aria-label="Edit Teacher"]')
    }

    getTeacherResetBtn(teachername){
        return cy.xpath('//p[text()="'+teachername+'"]/ancestor::tr//button[@aria-label="Reset"]')
    }

    getTeacherViewBtn(teachername){
        return cy.xpath('//p[text()="'+teachername+'"]/ancestor::tr//img[@src="/static/media/rightViewImg.a97b7807.svg"]')
    }

    getTeacherEditSaveChangesBtn(){
        return cy.get('button.continue-btn-cls')
    }

    getTeacherDeleteAccountBtn(){
        return cy.get('h6[class="MuiTypography-root MuiTypography-h6 css-1anx036"]').contains('Delete Account')
    }

    getTeacherConfermationPopupDeleteBtn(){
        return cy.get('button.userdelete')
    }

    getTeacherBulkUploadBtn(){
        return cy.get('button[aria-label="Bulk Upload"]')
    }

    getTeacherUploadTeacherAccountsinbulkDownloadSampleFileLink(){
        return cy.get('button.BulkUpload_downloadSampleTxt__1UJTp')
    }

    getTeacherUploadTeacherAccountsinbulkSelectFileFromComputerBtn(){
        return cy.get('input[id="file-input"]')
    }

    getTeacherUploadTeacherAccountsinbulkImportTeacherAccounts(){
        return cy.get('button.BulkUpload_bulkImport__spFpc')
    }

    getAdminAddNewTeacherAccountBasicDetailsCancelBtn(){
        return cy.get('div.cancel-btn')
    }

    getTeacherInCompleteIcon(){
        return cy.get('.TeacherDashboard_alertImgcls__3ceOA')
    }

}

module.exports = new adminUsersPage()