class curriculumBuilderPage{

    getCurriculumBuilderPageTitleText(){
        return cy.get('.font-cls-post-nav')
    }

    getTopSchoolTabText(){
        return cy.xpath("//button[text()='TopSchool']")
    }
}
module.exports = new curriculumBuilderPage()