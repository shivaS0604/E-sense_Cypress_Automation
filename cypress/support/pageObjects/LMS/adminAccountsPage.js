class adminAccountsPage{

    getAdminAccountText(){
        return cy.xpath('//div[text()="Admin Accounts"]')
    }

    getAddnewBtn(){
        return cy.get('button.adminRoles_addAdminBtn__2PCIE')
    }

    getAddNewRolePopUpText(){
        return cy.get('h5.RolesPopup_roleHeader__1d7KU')
    }

    getDesignationNameTextField(){
        return cy.get('input[name="userCustomRole"]')
    }

    getViewEditApprovalCheckBox(){
        return cy.get('span.RolesPopup_viewInputChecked__3Hg3M')
    }

    getAddRolePopUpBtn(){
        return cy.xpath("//button[text()='Add Role']")
    }
}

module.exports = new adminAccountsPage()