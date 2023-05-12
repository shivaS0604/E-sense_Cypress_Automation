class CreateRemainder
{
    getEnterRemainderTitleTextField()
    {
        return cy.xpath('//input[@placeholder="Enter Reminder Title"]')
    }
    getDateTextField()
    {
        return cy.xpath('//input[@placeholder="ddd d mmm, yyyy"]')
    }
    getStartTimeButton()
    {
        return cy.xpath('(//input[@placeholder="h:mm (a|p)m"])[1]')
    }
    getEndTimeButton()
    {
        return cy.xpath('(//input[@placeholder="h:mm (a|p)m"])[2]')
    }
    getRepeatDropdown()
    {
        return cy.xpath("//div[text()='Does not repeat']")
    }
    getRepeatlist(repeatListName)
    {
        return cy.xpath(`//li[text()=${repeatListName}]`)
    }
    getAddDescriptionTextarea()
    {
        cy.xpath("(//label[text()='Add description']/parent::div/descendant::textarea)[1]")
    }
    getAttachAFileButton()
    {
        cy.xpath("//p[text()='Attach a file']")
    }
    getAddNotesButton()
    {
        cy.xpath("//p[text()='Add Notes']")
       
    }
    getSaveRemainderButton()
    {
        cy.xpath("//button[text()='Save Reminder']")
    }

}
module.exports=new CreateRemainder()