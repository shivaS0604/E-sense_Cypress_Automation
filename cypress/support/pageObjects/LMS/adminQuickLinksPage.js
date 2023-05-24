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
}
module.exports = new adminQuickLinksPage()