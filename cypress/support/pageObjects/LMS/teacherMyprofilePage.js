class teacherMyprofilePage {
    myProfileAccountAandSupportBtn(){
        return cy.get('div[class="classTitle"]').contains('Account & Support')
    }


    accountAandSupportRequestChangeBtn(){
        return cy.get('button.clickbtn')
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
        return cy.get('li[role="option"]')
    } 

    accountAandSupportRequestChangeSuccessfullypopupCloseBtn(){
        return cy.get('svg[data-testid="CloseIcon"]')
    }

}
module.exports = new teacherMyprofilePage()