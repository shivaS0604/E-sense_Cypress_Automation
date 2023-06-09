class teacherMyprofilePage {
    myProfileAccountAandSupportBtn(){
        return cy.get('div[class="classTitle"]').contains('Account & Support')
    }


    accountAandSupportRequestChangeBtn(){
        return cy.get('.MuiButton-root')
    } 


    accountAandSupportRequestChangepopupWhatwouldyouliketochangeDropdown(){
        return cy.get('div.request_input')
    } 

    accountAandSupportRequestChangepopupWhatwouldyouliketochangeDropdownOpt(){
        return cy.get('li[role="option"]')
    } 

    accountAandSupportRequestChangepopupTellusabitmoreabouttheissueTxtAra(){
        return cy.get('textarea[id="rc_content"]')
    } 

    accountAandSupportRequestChangepopupSendRequestBtn(){
        return cy.get('button.request_btn')
    } 

    accountAandSupportRequestChangeSuccessfullypopupCloseBtn(){
        return cy.get('svg[data-testid="CloseIcon"]')
    }

    getSupportAndFeedbackTab(){
        return cy.get('a.ClassDashboard_routeDesign__2n_Xy').contains('Support & Feedback')
    }

    getFeedbackTaggaleBtn(){
        return cy.get('button[value="feedback"]')
    }

    getShareFeedbackBtn(){
        return cy.contains('+ New Feedback')
    }

    getShareFeedbackSelectModuleDropdown(){
        return cy.get('div[id="rc_screen"]')
    }

    getShareFeedbackSelectModuleDropdownOpt(){
        return cy.get('li[role="option"]')
    }

    getShareFeedbackEnterYourFeedbackTextareaFld(){
        return cy.get('[id="rc_content"]')
    }

    getShareFeedbackstarBtn(){
        return cy.get('span label')
    }

    getShareFeedbackSubmitBtn(){
        return cy.get('button.request_btn')
    }

}
module.exports = new teacherMyprofilePage()