class adminSupportTicketPage{
    getSupportTicketsResolveBtn(){
        return cy.get('button[data-testid="resolve0"]')
    }

    getSupportTicketsResolveRemarksTextareafld(){
        return cy.get('[data-testid="reson box"]')
    }

    getSupportTicketsPopupResolveBtn(){
        return cy.get('button.reject')
    }

    getSupportTicketsUndoBtn(){
        return cy.get('[data-testid="undo0"]')
    }

}
module.exports = new adminSupportTicketPage();