const teacherSupportTickets=require("../../support/pageObjects/LMS/teacherSupportTickets.js")
const adminDashboardPage=require("../../support/pageObjects/LMS/adminDashboardPage.js")
describe("Teacher_Support_Tickets",function(){
    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.teacherLogin(credentials.teacherUsername1, credentials.teacherPassword)
            this.credentials=credentials;

        })
    })
    it("E2E_02_Support_Tickets_To verify Teacher is notified once the Support ticket raised is Resolved/Rejected/Send to Top school",function(){
        teacherSupportTickets.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
        teacherSupportTickets.getTeacherSideNavbar().invoke('show')
        teacherSupportTickets.getTeacherMyProfileTab().scrollIntoView().click({force:true},{timeout:10000})
        teacherSupportTickets.getAccountandSupportTab().click({timeout:10000})
        teacherSupportTickets.getAccountandSupportPage().should('be.visible').and('have.text',' Account & Support')
        teacherSupportTickets.getSupportandFeedbackTab().click({timeout:10000})
        teacherSupportTickets.getRaiseNewTicketButton().click({timeout:2000})
        teacherSupportTickets.getRaiseSupportTicketPopup().should('be.visible',{timeout:10000}).and('have.text','Raise Support Ticket')
        
        teacherSupportTickets.getHelpDropdown().click({timeout:10000})
        teacherSupportTickets.getHelpDropdownList('Calendar').click().wait(1000)
        teacherSupportTickets.getAboutIssue().type('Issue')    
        teacherSupportTickets.getAddAttachment().attachFile('LMS/Event_added.pdf',{force:true}).wait(500) 
        teacherSupportTickets.getSendRequestButton().click()
        teacherSupportTickets.getRequestSentSuccessfullyMsg().should('be.visible',{timeout:10000})
        var ticketNumber;
        teacherSupportTickets.getTicketNumberInRequestSentSuccessfullyMsg().then(function($el){
            let ticketText=$el.text()
            ticketNumber=ticketText.slice(1)
            

        }).then(function(){
        

        teacherSupportTickets.getcloseIcon().click({timeout:10000})
        teacherSupportTickets.getRaiseSupportticketStatus(ticketNumber).should('have.text','Pending').wait(1000)
        teacherSupportTickets.teacherLogout()
        cy.adminLogin(this.credentials.username,this.credentials.password)
        adminDashboardPage.getSideNavBar().invoke('show')
        teacherSupportTickets.getAdminSupportTicketsTab().click({timeout:10000})
        teacherSupportTickets.getAdminSupportTicketsPage().should('be.visible').and('have.text','Support Tickets')
        teacherSupportTickets.getAdminSupportTicketsStatusbutton(ticketNumber,'Resolve').should('be.visible')
        teacherSupportTickets.getAdminSupportTicketsStatusbutton(ticketNumber,'Reject').should('be.visible')
        teacherSupportTickets.getAdminSupportTicketsStatusbutton(ticketNumber,'Send to TopSchool').should('be.visible')
        teacherSupportTickets.getAdminSupportTicketsStatusbutton(ticketNumber,'Resolve').should('be.visible').click({timeout:10000})
        teacherSupportTickets.getRemarksTextareaField().type("Remarks")
        teacherSupportTickets.getResolveButton().click().wait(1000)
        teacherSupportTickets.getAdminSupportTicketsStatusbutton(ticketNumber,' Undo').should('be.visible')
        teacherSupportTickets.getAdminSupportTicketsStatusbutton(ticketNumber,'Resolved').should('be.visible')
        adminDashboardPage.logout()
        cy.wait(10000)
        cy.teacherLogin(this.credentials.teacherUsername1,this.credentials.teacherPassword)
        teacherSupportTickets.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
        teacherSupportTickets.getTeacherSideNavbar().invoke('show')
        teacherSupportTickets.getNotificationTab().scrollIntoView().click({force:true},{timeout:10000})
        teacherSupportTickets.getYourNotificationSection().should('be.visible',{timeout:10000})
        teacherSupportTickets.getNotifications(ticketNumber).should('be.visible',{timeout:10000}).click()
        teacherSupportTickets.getVerifyNotification(ticketNumber).should('be.visible')
        teacherSupportTickets.getcloseIcon().click({timeout:10000})

        })

       
       


    })
})
