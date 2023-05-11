class adminIndexPage{
    
    getLoginAsAdminBtn() {
        return cy.get('button[type="button"]').eq(0)
    }

    getUserNameTxtFld() {
        return cy.get('input[name="userName"]')
    }

    getPasswordTxtFld() {
        return cy.get('input[name="password"]')
    }

    getLogInBtn() {
        return cy.get('button[form="loginForm"]')
    }

    getLoginAsTeacherBtn(){
        return cy.get('button[type="button"]').eq(1)
    }
    
}

module.exports = new adminIndexPage()