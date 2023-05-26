class SchoolInftastructures{

    getAddInfrastructureBttn(){
        return cy.get('div.add-infra-btn')
    }

    getInfrastructureTitle(){
        return cy.xpath("//div[text()='School Infrastructure']")
    }

    getPopUpAddInfrastructureTitle(){
        return cy.get('div.header-row')
    }

    getInfrastructureNameTextField(){
        return cy.xpath("//input[@name='buildingName']")
    }

    getNumberofFloorsTextField(){
        return cy.xpath("//input[@name='floors']")
    }

    getDiscriptionTextField(){
        return cy.xpath("//input[@name='description']")
    }

    getaddbttn(){
        return cy.get(".add-btn")
    }

    getAddInfrastructureInsertedSuccessfully(){
        return cy.xpath("//div[text()='Inserted Successfully']")
    }

    getInfrastructureNameText(){
        return cy.xpath("//div[text()='testyantra']")
    }
   
}
module.exports = new SchoolInftastructures()