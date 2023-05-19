class teacherOverViewPage{

    getTeacherSetNewPasswordPopupContinueBtn(){
        return cy.get('div.set-password-content button')
    }


    getTeacherSetNewPasswordPasswordTxt(){
        return cy.get('input[name="password"]')
    }

    getTeacherSetNewPasswordRetypePasswordTxt(){
        return cy.get('input[name="confirmPassword"]')
    }

    getTeacherSetNewPasswordRetypePasswordTxt(){
        return cy.get('input[name="confirmPassword"]')
    }

    getTeacherSetNewPasswordLoginBtn(){
        return cy.get('button[type="submit"]')
    }

    getTeacherLoginDetailsSetSuccessfullyPopUpGobackTologinBtn(){
        return cy.get('button[type="button"]')
    }

    getTeacherWalkthroughPopupCloseIcon(){
        return cy.get('div[class="slides active"] svg')
    }


    getTeacherOverViewContinueBtn(){
        return cy.get('button.btn_add_footer').contains('Continue')
    }


}

module.exports = new teacherOverViewPage();