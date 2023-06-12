class TeacherReport{

    // Tc_001 Verify that Teacher can add / edit the results in Students Gradebook  of the respective grades
    getSideNavBar(){
        return cy.get('div[class="side-nav-content "]')
    }

    getReportTab(){
        return cy.get('div[class="side-nav-content "] li').contains('Reports')
    }

    getStudentGradeBookTab(){
        return cy.get('div[class="content-report-sect"] [class="popover-arrow"]')
    }

    getEditBtn(){
        return cy.xpath('//button[contains(.,"Edit")]')
    }

    getTheoryTxtField(){
        return cy.get('input[type="text"]').eq(0)
    }

    getPracticleTxtField(){
        return cy.get('input[type="text"]').eq(1)
    }

    getCoScholasticActivitiesMarksTxtField(){
        return cy.get('td[class*="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium coSChWidCell"]').eq(0).next()
    }

    getRemarksTxtField(){
        return cy.get('textarea[id="outlined-multiline-static"]')
    }

    getStudentFullName(){
        return cy.get('tr[role="checkbox"] td:nth-child(4)')
    }

    getArrowForwardIcon(){
        return cy.get('[data-testid="ArrowForwardIosIcon"]')
    }
    getTotalPercentage(){
        return cy.get('div[class*="StudentGradeBook_stdGrdBkCrdStatSectInfo"]>h1').eq(0)
    }

    getStudentResult(){
        return cy.get('div[class*="StudentGradeBook_stdGrdBkCrdStatSectInfo"]>h1').eq(3)
    }

    getSaveBtn(){
        return cy.xpath('//button[contains(.,"Save")]')
    }

    getUpdatedStatus(){
        return cy.xpath('//td[contains(.,"Updated")]')
    }

    getCancelBtn(){
        return cy.xpath('//button[contains(.,"Cancel")]')
    }

    getShowGradingSystemDropdown(){
        return cy.xpath('//button[text()="Show" and text()= " Grading System"]')
    }

    getGradeSystemLists(){
        return cy.get('table[class="table table-hover"]').last().find('tr td')
    }

    getPreviewANDprintBtn(){
        return cy.xpath('//button[contains(.,"Preview & Print")]')
    }

    getPreviewANDprintList(){
        return cy.get('p[class*="MuiTypography-root MuiTypography"] div h6')
    }

    getGradesList(){
        return cy.get('p[class*="MuiTypography-root MuiTypography-body1 n"]')
    }

    getPublishedStatus(){
        return cy.xpath('//td[contains(.,"Published")]')
    }

    getListOfGrade(){
        return cy.get('[role="listbox"] li').contains('Grade 2')
    }

    getSectionList(){
        return cy.get('[role="listbox"] li').contains('A')
    }

    getSaveANDcountinueBtn(){
        return cy.xpath('//button[contains(.,"Save and Continue ")]')
    }
}
module.exports = new TeacherReport();