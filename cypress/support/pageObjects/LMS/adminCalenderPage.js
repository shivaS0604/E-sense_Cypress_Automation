class CalenderPage{
    getYourCalenderText(){

        return cy.xpath("//div[text()='Your Calendar']")
    }
    getCreateNewButton(){

        return cy.xpath("//button[text()='Create New']")
    }
    getCreateANewCalenderText(){

        return cy.xpath("//p[text()='Create a new calendar entry']")
    }
    getRemainderTab() {

        return cy.xpath("//div[text()='Reminder']")
    }
    getCreateRemainderText(){

        return cy.xpath("//h1[text()='Create Reminder']")
    }
    getEnterRemainderTitleTextField(){

        return cy.xpath('//input[@placeholder="Enter Reminder Title"]')
    }
    getDateTextField(){

        return cy.xpath('//input[@placeholder="ddd d mmm, yyyy"]')
    }
    getTodayDateButton(){

        return cy.xpath("//button[contains(@class,'MuiPickersDay-today')]")
    }
    getStartTimeButton() {

        return cy.xpath('(//input[@placeholder="h:mm (a|p)m"])[1]')
    }
    getEndTimeButton(){

        return cy.xpath('(//input[@placeholder="h:mm (a|p)m"])[2]')
    }
    getRepeatDropdown(){

        return cy.xpath("//div[text()='Does not repeat']")
    }
    getRepeatlist(repeatListName){

        return cy.xpath('//li[text()="'+repeatListName+'"]')
    }
    getAddDescriptionTextarea(){

        return cy.xpath("(//label[text()='Add description']/parent::div/descendant::textarea)[1]")
    }
    getAttachAFileButton(){

       return cy.get('input[name="reminderFile"]')
    }
    getAddNotesButton(){

        return cy.xpath("//p[text()='Add Notes']")
       
    }
    getAddNoteButton()
    {
      return cy.xpath("//button[text()='Add Note']")
    }
    getSaveRemainderButton(){

      return  cy.xpath("//button[text()='Save Reminder']")
    }
    getRemainderModelContent(){

      return cy.xpath('//div[@class="reminder-model-content"]')
    }
    getAMButton(){

        return cy.xpath("//span[text()='AM']/parent::button")
    }
    getPMButton(){

        return cy.xpath("//span[text()='PM']/parent::button")
    }
   getEndRemainderOnButton(){
       return cy.xpath("//label[text()='End this reminder on']")
   }
   getPickDateInCalender(date){
    return cy.xpath("//button[text()='"+date+"']")
   }
   getViewNoteTimeText(){
    return cy.xpath('//time[@class="view_note-time"]')
   }
   getAddTitleTextField(){
    return cy.xpath('//input[@placeholder="Add title"]')
   }
   getDescriptionTextField(){
     return cy.xpath('//div[@data-placeholder="Description"]')
   }
   getBackToNoteListButton(){
    return cy.xpath("//button[text()='Back to note list']")
   }
   getAllNotesButton(){
    return cy.xpath("//button[contains(text(),'All Notes')]")
   }
   getSearchTextField(){
    return cy.xpath('(//input[@placeholder="Search"])[2]')
   }
   getVerifyAddNotesTitleText(title){
    return cy.xpath("//h6[text()='"+title+"']")
   }
   getVerifyDescriptionText(description){
    return cy.xpath("//p[text()='"+description+"']")
   }
   getVerifyTimeText(time){
    return cy.xpath("//time[text()='"+time+"']")
   }
   getCloseIcon(){
    return cy.xpath('(//*[name()="svg" and @data-testid="CloseIcon"])[2]')
   }
   getSaveRemainderButton(){
    return cy.xpath("//button[text()='Save Reminder']")
   }
   getRemainderSavedSuccesfullyMsg(){
    return cy.xpath("//span[text()='Reminder saved successfully']")
   }
   getRemaindersCheckBox(){
    return cy.xpath('//input[@name="Reminders"]')
   }
   getWeeklyDropdown(){
    return cy.get('select')
   }
   getVerifyRemainderTextInCalender(date,remain){
    return cy.xpath('((//div[@class="mbsc-calendar-wrapper mbsc-windows"])[2]/descendant::div[text()="'+date+'"])[2]/following-sibling::div/descendant::div[text()="'+remain+'"]')
   }
   getRemainderDetailsInCalender(){
    return cy.get('.md-custom-event-wrapper')
   }
   getDeleteButton(){
    return cy.xpath("//button[text()='Delete']")
   }
   getDeleteForEverButton(){
    return cy.xpath("//button[text()='Delete forever']")
   }
}
module.exports=new CalenderPage()