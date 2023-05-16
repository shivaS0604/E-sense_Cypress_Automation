class GradeAndSubjectPage{

    getGrades(){
        return cy.get('td.grade-name')
    }

    getSectionAddBtn(){
        return cy.get('button.sectionAddBtn')
    }

    getSectionBttn(){
        return cy.get('button.sectionsBtn')
    }

    getAddNewSectionPopUPTitle(){
        return cy.get('span.title')
    }

    getAddNewSectionPopUPSectionNameTextField(){
        return cy.get('div.MuiInputBase-formControl input')
    }

    getOptionalSubjectsDropDownBtn(){
        return cy.get('div[id="opt-subjects"]')
    }

    getAddNewSectionPopUPOptionalSubjectsLists(){
        return cy.get('ul.MuiMenu-list li')
    }

    getAddNewSectionPopUPAddSectionBtn(){
        return cy.get('button.sectionSaveBtn')
    }

    getSectionDeleteBtn(){
        return cy.get('button.delete-section')
    }

    getSectionDeletePopUpDeleteBtn(){
        return cy.get('button.deptDeletebtn')
    }
}
module.exports = new GradeAndSubjectPage()