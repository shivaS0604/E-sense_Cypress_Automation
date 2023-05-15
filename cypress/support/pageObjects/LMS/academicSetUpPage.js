class academicSetUpPage{

    getAddNewBttn(){
        return cy.get('div.AcademicYear_add_btn_list_academic_cls__1CmB1')
    }

    getAddAcademicPopUpSelectYearDropdownBttn(){
        return cy.get('#demo-simple-select')
    }

    getAddAcademicPopUpSelectYearDropdownLists(){
        return cy.get('div.MuiPopover-paper>ul>li').eq(0)
    }

    getAddAcademicSetUpPopUpTittle(){
        return cy.get('div.left-col-cls div')
    }

    getAddAcademicSetUpPopUpStartDateCalenderIcon(){
        return cy.get('button.MuiIconButton-sizeMedium')
    }

    getAddAcademicSetUpPopUpStartDateCalenderArrowRightIcon(){
        return cy.get('svg[data-testid="ArrowRightIcon"]')
    }

    getAddAcademicSetUpPopUpCalenderDates(){
        return cy.get('div.css-i6bazn')
    }

    getAddAcademicPopUpAddBttn(){
        return cy.get('button.add-btn-cls')
    }

    getGradeAndAcademicTab(){
        return cy.xpath('//button[text()="Grades and subject"]')
    }


    


}

module.exports = new academicSetUpPage()