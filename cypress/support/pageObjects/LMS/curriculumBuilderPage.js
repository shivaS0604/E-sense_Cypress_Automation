class curriculumBuilderPage{

    getCurriculumBuilderPageTitleText(){
        return cy.get('.font-cls-post-nav')
    }

    getTopSchoolTabText(){
        return cy.xpath("//button[text()='TopSchool']")
    }

    getMySchoolGradesText(){
        return cy.get('strong')
    }

    getMySchoolTab(){
        return cy.xpath("//button[text()='My School']")
    }

    getViewDetailsBttn(){
        return cy.get("button.details-button")
    }

    getTopSchoolGrades(){
        return cy.get("strong")
    }

    getTopSchoolViewDetails(){
        return cy.get('button.topsclMbl')
    }

    getDuplicateBttn(){
        return cy.get('img[alt="Duplicate"]')
    }

    getOverWrightBtn(){
        return cy.xpath("//button[text()='Overwrite']")
    }
}
module.exports = new curriculumBuilderPage()