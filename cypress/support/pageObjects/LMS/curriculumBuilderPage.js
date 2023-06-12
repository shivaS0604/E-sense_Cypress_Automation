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

    getAllSelectGradesCheckBox(){
        return cy.get("span.topsclMbl")
    }

    getMySchoolAllSelectGradesCheckBox(){
        return cy.get("span.mysclMbl")
    }

    getBottomDuplicateBtn(){
        return cy.xpath("//div[text()='Duplicate Curriculum']")
    }

    getSussfullMessage(){
        return cy.get('.MuiAlert-message')
    }

    getMyschlBootomApproveBtn(){
        return cy.xpath('//div[text()="Approve"]')
    }

    getMyschlPopUpApproveBtn(){
        return cy.xpath('//span[text()="Approve"]')
    }

    getCurriculumApprovePopUpText(){
        return cy.xpath("//div[text()='Curriculum Approved']")
    }

    getCurriculumApproveCloseBtn(){
        return cy.get('.close-btn')
    }

    getMyschlCourses(){
        return cy.get('th.logo-course')
    }
}
module.exports = new curriculumBuilderPage()