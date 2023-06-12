class adminQuickLinksPage {

  getSchoolInfrastructureTabInQuickLinksPage() {
    return cy.get('div.StudentSchool_schQicLikSectCard__F0UPY>div>p').contains("School Infrastructure")
  }

  getAddInfrastructureBtn() {
    return cy.get('div.add-infra-btn').contains("+ Add Infrastructure")
  }

  getInfrastructureNameTxtFld() {
    return cy.get('div>input[name="buildingName"]')
  }

  getNoOfFloorsTxtFld() {
    return cy.get('div>input[name="floors"]')
  }

  getDescriptionTxtFld() {
    return cy.get('div>input[name="description"]')
  }

  getAddRoomLnkForSpecifiedRoom(roomName) {
    return cy.xpath("//div[contains(text(),'"+roomName+"')]/../div/div/div[contains(@class,'rooms-btn')]")
  }

  getRoomnameTxtFldInAddRoomPopup() {
    return cy.get('div>input[name="buildingRoomName"]')
  }

  getFloorLevelTxtFldInAddRoomPopup() {
    return cy.get('div>input[name="floor"]')
  }

  getGradeDrpdwnInAddRoomPopup() {
    return cy.get('div.schAdminSelctCtr>label')
  }

  getMenuSchoolImg() {
    return cy.get('div.side-nav-icon img[src="/static/media/company.e1656b4d.svg"]')
}

getTimetableManagementBtn() {
    return cy.get('div.StudentSchool_schQicLikSectCard__F0UPY p')
}

getListOfTimeTableGenerated() {
    return cy.get('table.MuiTable-root tr')
}

getDropdownsInTimeTable() {
    return cy.get('[aria-haspopup="listbox"]:visible')
}

getDropdownListInTimeTableDynamic(value) {
    return cy.xpath('//ul[@role="listbox"]/li[.="' + value + '"]')
}

getRoomNameDrpDwn(){
    return cy.xpath('//ul[@role="listbox"]/li')
}

getTimetableGenerateBtn() {
    return cy.get('button.Timetable_adminTimTbleSectTbleOverviewSelect__2mQZC')
}

getGenerateTimetableBtn() {
    return cy.xpath('//button[text()="Generate Timetable"]')
}

getEditTimeTableHeader() {
    return cy.get('div.header_font_cls span')
}

getViewTimeTableHeader() {
    return cy.get('div.header_font_cls span')
}

getViewTimeTableDate() {
    return cy.get('div.liveClassTsrCrdDesc')
}

getViewTimeTableDays() {
    return cy.get('div.mbsc-schedule-header-item')
}

getViewTimeTableStartTime() {
    return cy.get('[placeholder="h:mm (a|p)m"]')
}

getViewTimeTableEndTime() {
    return cy.get('[placeholder="h:mm (a|p)m"]')
}

getViewTimeTableAMBtn() {
    return cy.get('.MuiTypography-root')
}

getViewTimeTablePMBtn() {
    return cy.get('.MuiTypography-root')
}

getViewTimeTableRightArrow() {
    return cy.get('[data-testid="ArrowRightIcon"]')
}

getTimetableGeneraAutoBtn() {
    return cy.get('td.MuiTableCell-root:nth-child(5)')
}

getTimetableGeneraManualBtn() {
    return cy.get('td.MuiTableCell-root:nth-child(5)')
}

getTimetableGradeNameBtn() {
    return cy.get('.MuiTableBody-root > :nth-child(n) > :nth-child(2)')
}

getEditTimeTableSaveChangesBtn() {
    return cy.get('button.MuiButton-root').contains('Save Changes')
}

getEditTimeTableUpdateMesg() {
    return cy.get('.request_para')
}

getTimetableGeneratedDeleteBtn() {
    return cy.get(':nth-child(n) > :nth-child(7) > .adminTimTblActCell > :nth-child(2) > img')
}

getTimetableGeneratedEnabledEditBtn() {
    return cy.get('td.MuiTableCell-root span svg[xmlns="http://www.w3.org/2000/svg"]').eq(4)
}

getTimetableGenertedDisabledEditBtn() {
    return cy.get(':nth-child(n) > :nth-child(7) > .adminTimTblActCell > [src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKCSURBVHgBvVfBbtpAEH27a1yISCmIpCqqSkRRKtFDD80hR679gPxP/icf0CvHHtpDpRapiFShh1QJjUgLbQLY3u6ubTAkYK9N/CSDWHb3vZ2ZnRkTaIFTNEFxKR6BehVEfnd74OrvXThoiQfEibojiTSryQ1J6hNGQfcGNlrECpsXsiE36u/AkADdPCycEBvaAhrc1DnxWhHSRW0yQWQBGyRfFIGpoOTBcZoGuYTas4HM8jhJgzyIZXcELCAC7oHJJRTHEWd3BCSNdi0RIxiLAuQ9Txsep/qo55Kfvvy4VyMZqwpOpn/7tQ//GNYmocYOaBvKApwiIYr5syJ5ZL8EJYY4Sm7rae9F2JrJSMTCMadubk+AAutsD0Z7A1CzB120QGeFJQ7KhbNnZsk4lObvXzzvcIedi3Pd3A75zyjr3+6DkMYRN5U5NFF40tk2M8ah/5uP2emvP9XvWzaMMP/7MPPC/7HJGTsIjpGsXdEhl5Dc2uYv5AdZk2bfqIDzQbk1mVifdchnS6UZok5W5ObwAMzKBccnY/vj7+v9ITShXND+qrEgd/1qmVxcpC9xyCVyRZH/VRuFiImIOiU485BxLHy7GuxFivj78Knj9niR+rfSzjAvyGd+55ydXg1qP5AETe84Ua5iqdyrUGpVHMc4v72oXsYJuGV035OxSyoKwybqgRa517S617AFG2nD4/TyAOFKUUpwudzecJ6IhDl0ckJcKI6AxRcyYfsE04cUIfeWHMHO+J7I56JAIROnRuiSrxCweRGryNcI8LCB6+let3nQ6QlQ4ERkLKYjRJ24r96UVxJrCAgIORbzRRslG0o54rvID9zd13BaokSIeTyM2Md/RWL80Im7RW4AAAAASUVORK5CYII="]')
}

getGeneratTimetableBtn() {
    return cy.get('button.MuiButton-root').contains('Generate Time Slots')
}

getTimetableGenerateAutoRadioBtn() {
    return cy.get('div.MuiFormGroup-root label')
}

getGeneratedTimetableDaysDropdown() {
    return cy.get('div#demo-simple-select')
}
}
module.exports = new adminQuickLinksPage()