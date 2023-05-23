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

    getSetPasswordBtn(){
        return cy.get('p.set-password-msg')
    }

    getSetPassrwordContinueBtn() {
        return cy.get('button').contains("Continue")
    }

    getSetPasswordFld() {
        return cy.get('input[name="password"]')
    }

    getSetConfirmPasswordFld() {
        return cy.get('input[name="confirmPassword"]')
    }

    getSetPassWordSubmitBtn(){
        return cy.get('button[type="submit"]')
    }

    getGoBackToLoginBtn() {
        return cy.get('button[type="button"]').contains("Go Back To Login")
    }
    
}

module.exports = new adminIndexPage()