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

    getAdminAddNewTeacherAccountGradeSectionSelectGradeDropdownOpt(){
        return cy.get('span.MuiListItemText-primary')
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

    getTeacherDeleteAccountBtn(){
        return cy.get('h6[class="MuiTypography-root MuiTypography-h6 css-1anx036"]').contains('Delete Account')
    }

    getTeacherConfermationPopupDeleteBtn(){
        return cy.get('button.userdelete')
    }

}

module.exports = new adminUsersPage()