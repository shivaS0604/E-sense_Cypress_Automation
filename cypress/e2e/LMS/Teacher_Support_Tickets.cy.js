const teacherSupportTickets=require("../../support/pageObjects/LMS/teacherSupportTicketsPage.js")
const adminDashboardPage=require("../../support/pageObjects/LMS/adminDashboardPage.js")
const teacherDashboardPage=require("../../support/pageObjects/LMS/teacherDashboardPage.js")
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
        teacherDashboardPage.teacherLogout()
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
    it('E2E_03_LeaveRequest_To verify Teacher is notified once the Leave Request is Approved/Rejected.',function(){
        teacherSupportTickets.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
        teacherSupportTickets.getTeacherSideNavbar().invoke('show')
        teacherSupportTickets.getMyCalenderTab().scrollIntoView().click({force:true},{timeout:10000})
        teacherSupportTickets.getYourCalenderPage().should('be.visible')
        teacherSupportTickets.getRequestLeaveButton().click({timeout:10000})
        teacherSupportTickets.getRequestAbsencePopup().should('be.visible')
        teacherSupportTickets.getReasonforLeaveRadioButton('Vacation Leave').click({timeout:10000})
        teacherSupportTickets.getLeaveTypeRadioButton(' Full day(s) ').click({timeout:10000})
        teacherSupportTickets.getStartdateButtonInRequestAbsencepopup().click().wait(500)
        teacherSupportTickets.getTodayDateButton().click({timeout:10000}).wait(1000)
        teacherSupportTickets.getEnddateButtonInRequestAbsencepopup().click({timeout:1000})
        teacherSupportTickets.getTodayDateButton().click({timeout:10000}).wait(1000)
        teacherSupportTickets.getSendRequestButton().click({timeout:1000}).wait(500)
        teacherSupportTickets.getTeacherSideNavbar().invoke('show')
        teacherSupportTickets.getTeacherMyProfileTab().scrollIntoView().click({force:true},{timeout:10000})
        teacherSupportTickets.getAccountandSupportTab().click({timeout:10000})
        teacherSupportTickets.getAccountandSupportPage().should('be.visible',{timeout:10000})
        teacherSupportTickets.getTeacherLeaveRequestTab().click().should('be.visible',{timeout:10000})
        cy.xpath("//div[text()='All']").click()
        cy.xpath("//li[text()='Approved']").click().wait(10000)
        teacherSupportTickets.getTeacherApprovedStatus().then(function($el){
            let teacherLRApprovedcount=$el.length
            cy.log(teacherLRApprovedcount)

            teacherDashboardPage.teacherLogout()
            cy.wait(1000)
            cy.adminLogin(this.credentials.username,this.credentials.password)
            adminDashboardPage.getSideNavBar().invoke('show')
            teacherSupportTickets.getAdminSupportTicketsTab().click({force:true},{timeout:10000})
            teacherSupportTickets.getAdminSupportTicketsPage().should('be.visible').and('have.text','Support Tickets').wait(1000)
           teacherSupportTickets.getAdminLeaveRequests().click({force:true}).wait(1000)
           cy.xpath("//div[text()='All']").click().wait(1000)
           cy.xpath("//li[text()='Approved']").click().wait(10000)
          
            cy.xpath("//button[text()='Approved']").then(function($el1){
                let adminLRApprovedcount=$el1.length
                cy.log(adminLRApprovedcount)
                cy.xpath("//div[text()='Approved']").click().wait(1000)
                cy.xpath("//li[text()='All']").click().wait(10000)
                teacherSupportTickets.getAdminLeaveRequestsApproveStatusButton().click({timeout:10000}).wait(10000)


                cy.xpath("//label[text()='Remarks']/following-sibling::div/textarea[1]").type("Remarks",{timeout:1000}).wait(1000)
                teacherSupportTickets.getApproveRequestButton().click({timeout:10000})
                teacherSupportTickets.getLeaveRequestApprovedMsg().should('be.visible',{timeout:10000})
                adminDashboardPage.getSideNavBar().invoke('show')
            teacherSupportTickets.getAdminSupportTicketsTab().click({force:true},{timeout:10000})
            teacherSupportTickets.getAdminSupportTicketsPage().should('be.visible').and('have.text','Support Tickets')
            teacherSupportTickets.getAdminLeaveRequests().click({force:true},{timeout:10000})
            cy.xpath("//div[text()='All']").click()
            cy.xpath("//li[text()='Approved']").click().wait(1000)
            
            teacherSupportTickets.getApprovedStatusButton().should('be.length',adminLRApprovedcount+1)
            adminDashboardPage.logout()
             cy.wait(10000)
        cy.teacherLogin(this.credentials.teacherUsername1,this.credentials.teacherPassword)
        teacherSupportTickets.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
        teacherSupportTickets.getTeacherSideNavbar().invoke('show')
        teacherSupportTickets.getTeacherMyProfileTab().scrollIntoView().click({force:true},{timeout:10000})
        teacherSupportTickets.getAccountandSupportTab().click({timeout:10000})
        teacherSupportTickets.getAccountandSupportPage().should('be.visible',{timeout:10000})
        teacherSupportTickets.getTeacherLeaveRequestTab().click().should('be.visible',{timeout:10000})
        cy.xpath("//div[text()='All']").click()
        cy.xpath("//li[text()='Approved']").click().wait(1000)
        teacherSupportTickets.getTeacherApprovedStatus().should('be.length',teacherLRApprovedcount+1)

            })
    
            
        })

    })
  
    
    })

