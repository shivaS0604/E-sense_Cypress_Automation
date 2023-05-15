class GradeAndSubjectPage{

    getGrades(){
        return cy.get('td.grade-name')
    }

    getSectionAddBtn(){
        return cy.get('button.sectionAddBtn')
    }

    getAddNewSectionPopUPSectionNameTextField(){
        return cy.get('div.MuiInputBase-formControl')
    }

    getAddNewSectionPopUPOptionalSubjectsLists(){
        return cy.get('ul.MuiMenu-list li')
    }

    getAddNewSectionPopUPAddSectionBtn(){
        return cy.get('button.sectionSaveBtn')
    }
}
module.exports = new GradeAndSubjectPage()