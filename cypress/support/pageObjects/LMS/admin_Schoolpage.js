class adminSchoolPage{

    getSchoolSideBarNavigationImg(){
        return cy.get('img[src="/static/media/company.e1656b4d.svg"]')
    }

    getSchoolAcademicSetUp(){
        return cy.xpath('//p[text()="Academic Setup"]')
    }

    getAcademicSetUpTittle(){
        return cy.get('div.header-font-cls')
    }
}
module.exports = new adminSchoolPage()