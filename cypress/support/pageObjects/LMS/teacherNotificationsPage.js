class teacherNotificationsPage {

    getNotificationsSideTab() {
        return cy.get('div[class="menu-txt"]').contains('Notification')
    }
    getEarlierNotifications(){
        return cy.get('.notecardhead')
    }
} module.exports = new teacherNotificationsPage();