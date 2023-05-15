class adminDashboardPage {

    getMyProfileIconInSideNavigationBar() {
        return cy.get('div.side-nav-dashboard>.profile-pic>img')
    }

    getLogoutBtnInMyProfileList() {
        return cy.get('div.popover-student>.classTitle').contains("Logout")
    }
    
    getCalenderTab() {
        return cy.xpath("//div[text()='Calendar']")
    }
    getSideNavBar()
    {
        return cy.xpath('//div[@class="side-nav-bar "]')
    }

    getGradeWiseAttendanceBarLst(className) {
        return cy.xpath('//h4[text()="'+className+'"]/parent::*')
    }

    //Logout-admin
    logout() {
        this.getMyProfileIconInSideNavigationBar().click({ force: true }).wait(1000)
        this.getLogoutBtnInMyProfileList().click({ force: true }).wait(2000)
        cy.get('body').then(($el) => {
            if ($el.find('a.link_404').length > 0) {
                cy.get('a.link_404').click().wait(1000)
            }
        })
    }

}

module.exports = new adminDashboardPage()