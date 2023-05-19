class CalenderPage{
    getBody(){
        return cy.get('body')
    }
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
   getVerifyTextInCalenderWithName(date,remain){
    return cy.xpath('((//div[@class="mbsc-calendar-wrapper mbsc-windows"])[2]/descendant::div[text()="'+date+'"])[2]/following-sibling::div/descendant::div[text()="'+remain+'"]')
   }
   getRemainderDetailsInCalender(remain){
    return cy.xpath("//strong[text()='"+remain+"']")
   }
   getDeleteButton(){
    return cy.xpath("//button[text()='Delete']")
   }
   getDeleteForEverButton(){
    return cy.xpath("//button[text()='Delete forever']")
   }
   getCreateHolidayText(){
    return cy.xpath("//h1[text()='Create Holiday']")
   }
   getHolidaybutton(){
    return cy.xpath("//div[text()='Holiday']")
   }
   getEnterHolidayTextField(){
    return cy.xpath('//input[@placeholder="Enter Holiday Title"]')
   }
   getStartdateButtonInCreateHolidayPage(){
    return cy.xpath('(//input[@placeholder="ddd d mmm, yyyy"])[1]')
   }
   getEnddateButtonInCreateHolidayPage(){
    return cy.xpath('(//input[@placeholder="ddd d mmm, yyyy"])[2]')
   }
   getHolidayDescriptionTextareaField(){
    return cy.xpath("(//span[text()='Holiday description']/ancestor::fieldset/parent::div/textarea)[1]")
   }   
   getSaveHolidayButton(){
    return cy.xpath("//button[contains(text(),'Save Holiday')]")
   }
   getHolidayAddedSuccessfullyMsg(){
    return cy.xpath("//div[contains(text(),'Holiday Added Successfully')]")
   }
   getDeleteHolidayButton(){
    return cy.get('button').contains('Delete Holiday')
   }
   getHolidayDetailsIncalender(holiday){
    return cy.xpath("//strong[text()='"+holiday+"']")
   }
   getEventButton(){
    return cy.xpath("//div[contains(text(),'Event')]")
   }
   getCreateEventText(){
    return cy.xpath("//h1[text()='Create Event']")
   }
   getEnterEventTitleTextField(){
    return cy.xpath('//input[@placeholder="Enter Event Title"]')
   }
   getSingleDayRadioButton(){
    return cy.xpath('//input[@value="Single"]')
   }
   getMultipleDaysRadioButton(){
    return cy.xpath('//input[@value="Multiple"]')
   }
   getDateOfEventButton(){
    return cy.xpath("//label[contains(text(),'Date of the event')]/parent::div")
   }
   getEventAddDescription(){
    return cy.xpath("(//span[contains(text(),'Add description')]/ancestor::fieldset/parent::div/textarea)[1]")
   }
   getEventTypeDropdown(){
    return cy.xpath("//span[contains(.,'Event type')]/ancestor::fieldset/parent::div")
   }
   getEventDropdownList(eventType){
    return cy.xpath("//li[contains(text(),'"+eventType+"')]")
   }
   getExtraCurricularActivityCheckbox(){
    return cy.xpath('//span[contains(text(),"Extra Curricular Activity?")]/parent::label/child::span[contains(@class,"MuiCheckbox-root MuiCheckbox-colorPrimary")]/input')
   }
   getPrepHoursRequiredDropdown(){
    return cy.xpath("//label[contains(text(),'Prep hours required')]/parent::div")
   }
   getPrepHoursRequiredDropdownList(hours){
    return cy.xpath("//li[contains(text(),'"+hours+" hours')]")
   }
   getAddParticipants(){
    return cy.xpath("//p[text()='Add Participants']")
   }
   getEventModelBody(){
    return cy.xpath('//div[@class="event-model-wrapper "]')
   }
   getGradeDropdownInEventPage(){
    return cy.xpath("//label[text()='Grade']/parent::div")
   }
   getGradeDropdownListInEventPage(grade){
    return cy.xpath("//li[contains(text(),'"+grade+"')]")
   }
   getSectionDropdownInEventPage(){
    return cy.xpath("//label[text()='Section']/parent::div/child::div")
   }
   getSectionDropdownListInEventPage(section){
    return cy.xpath("//li[contains(text(),'"+section+"')]")
   }
   getStudentCheckboxInEventPage(student){
    return cy.xpath("//p[contains(text(),'"+student+"')]/parent::div/following-sibling::span/input")
   }
   getStudentPopupCloseIconInEventPage(){
    return cy.xpath("(//*[name()='svg' and @data-testid='CloseIcon'])[2]")
   }
   getSaveEventButton(){
    return cy.xpath("//button[text()='Save Event']")
   }
   getEventCreatedMsg(){
    return cy.xpath("//div[contains(text(),'EVENT_CREATED')]")
   }
   getEventCheckbox(){
    return cy.xpath('//input[@name="Event"]')
   }
   getEventDetailsIncalender(event){
    return cy.xpath("//strong[text()='"+event+"']")
   }
   getDeleteEventButton(){
    return cy.xpath("//button[contains(text(),'Delete Event')]")
   }
   getAppointmentButton(){
    return cy.xpath("//div[text()='Appointment']")
   }
   getCreateAppointmentSection(){
    return cy.xpath("//h1[text()='Create Appointment']")
   }
   getEnterAppointmentTitleTextField(){
    return cy.xpath('//input[@placeholder="Enter Appointment Title"]')
   }
   getAttendeesButton(){
    return cy.xpath("//p[text()='Attendees']")
   }
   getTeacherButtonInAttendeesSection(){
    return cy.xpath("//button[text()='Teachers']")
   }
   getAdminsButtonInAttendeesSection(){
    return cy.xpath("//button[text()='Admins']")
   }
   getcloseButtonInAttendeesSection(){
    return cy.xpath("//button[text()='close']")
   }
   getRemindDropdownInAppointmentPage(){
    return cy.xpath("//label[text()='Remind']/parent::div")
   }
   getRemindDropdownListInAppointmentPage(remind){
    return cy.xpath("//li[contains(text(),'"+remind+"')]")
   }
   getAppointmentTypeDropdown(){
    return cy.xpath("//label[text()='Appointment Type']/parent::div")
   }
   getAppointmentTypeDropdownListInAppointmentPage(AppointmentType){
    return cy.xpath("//li[contains(text(),'"+AppointmentType+"')]")
   }
   getMeetingLinkTextField(){
    return cy.xpath("//label[text()='meeting link']/following-sibling::div/input[@type='text']")
   }
   getSaveAppointmentButton(){
    return cy.xpath('//button[text()="Save Appointment"]')
   }
   getAppointmentCreatedMsg(){
    return cy.xpath("//p[contains(text(),'Appointment Created')]")
   }
   getAppointmentCheckbox(){
    return cy.xpath("//input[@name='Appointment']")
   }
   getDeleteAppointmentButton(){
    return cy.xpath("//button[text()=' Delete Appointment']")
   }
   getDateButtonInAppointmentPage(){
    return cy.xpath("//label[text()='Date']/parent::div")
   }
   getCreateAppointmentBody(){
    return cy.xpath('//div[@class="class-model-content"]')
   }
   getSectionDropdownInAppointmentPage(){
    return cy.xpath("//label[text()='Sections']/parent::div")
   }
   getStudentCheckboxInAppointmentPage(student){
    return cy.xpath("//p[contains(text(),'"+student+"')]/ancestor::div[@class='d-flex txtcenter']/following-sibling::span/input")
   }

}   
module.exports=new CalenderPage()