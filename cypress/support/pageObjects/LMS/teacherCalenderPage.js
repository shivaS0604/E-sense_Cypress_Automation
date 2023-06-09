class TeacherCalenderPage{
    getYourCalenderPage(){
        return cy.xpath("//div[text()='Your Calendar']")
    }
    getRequestLeaveButton(){
        return cy.xpath("//button[text()='Request Leave']")
    }
    getCreateNewButton(){
        return cy.xpath("//button[text()='Create New']")
    }
    getClassInCalender(){
        return cy.xpath("//div[@class='md-custom-event-details']")
    }
    getAddLessonPlanButton(){
        return cy.xpath("//button[text()='Add Lesson Plan']")
    
    }
    getStartSessionButton(){
        return cy.xpath("//button[text()='Start Session']")
    }
    getResourceText(){
        return cy.xpath("//p[text()='Resources']")
    }
    getAddResourceButton(){
        return cy.xpath('//div[@class="vc_resources_dwn_btn"]')
    }
    getNotesAttachedText(){
        return cy.xpath("//p[text()='Notes Attached']")
    }
    getNotesAttachedViewButton(){
        return cy.get('span[class="noteAttViewBtn"]').contains('View')
    }
    getHomeworkText(){
        return cy.xpath("//p[text()='Homework']")
    }
    getAddHomeWorkButton(){
        return cy.get("span[class='noteAttViewBtn']").contains('+ Add')
    }
    getRescheduleClassButton(){
        return cy.xpath("//button[text()='Reschedule Class']")
    }
    getAddHomeworkPopup(){
    return cy.xpath("//h1[text()='Add Homework']")
    }
    getHomeworkTitleTextField(){
        return cy.xpath("//span[text()='Title*']/parent::legend/parent::fieldset/preceding-sibling::input")
    }
    getHomeworkDescriptionTextareaField(){
        return cy.xpath("//span[text()='Description']/parent::legend/parent::fieldset/preceding-sibling::textarea[2]")
    }
    getDueTimeButton(){
        return cy.xpath("//input[@placeholder='h:mm (a|p)m']")
    }
    getApproxTimeRequiredDropdown(){
        return cy.xpath("//label[text()='Approx Time Required*']/parent::div")
    }
    getFilesInAddHomeworkPopup(){
        return cy.xpath("//h4[contains(text(),'Files')]")
    }
    getSaveButton(){
        return cy.xpath("//button[text()='Save']")
    }
    getAddHomeworkBody(){
        return cy.xpath("//div[@class='add_homework-content']")
    }
    getApproxTimeRequiredDropdownList(time){
        return cy.xpath("//li[contains(text(),'"+time+" mins')]")
    }
    getHomeworkView(){
        return cy.xpath("//p[text()='Homework']/following-sibling::span[text()='View']")
    }
    getHomeworkpopup(){
        return cy.xpath("//h1[text()='Homework']")
    }
    getClassTitleText(title){
        return cy.xpath("//p[contains(text(),'"+title+"')]")
    }
    getcloseIcon(){
        return cy.xpath("//*[name()='svg' and @data-testid='close-icon']")
    }
    


}
module.exports=new TeacherCalenderPage()