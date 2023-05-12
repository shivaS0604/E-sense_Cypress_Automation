class AdminReportPage{

    getAdminReportsSideMenubarReportTab(){
        return  cy.get('div.side-nav-bar ').invoke('show').contains('Reports')
    }

    getAdminReportsStudentGradebookTab(){
        return cy.get('[class="content-popover-reports"]').eq(0).should('be.visible')
    }
    getAdminReportsStudentGradebookText(){
        return cy.contains('Student Gradebook')
    }
    getAdminReportsGradeEditButton(){
        return cy.xpath('//p[contains(text(),"Grade 1")]/ancestor::tr//img[@aria-label="Edit"]').should('be.visible')
    }

    getAdminReportsBasicTemplateDetailsText(){
        return  cy.contains('Basic Template Details')

    }
}
module.export=new AdminReportPage()