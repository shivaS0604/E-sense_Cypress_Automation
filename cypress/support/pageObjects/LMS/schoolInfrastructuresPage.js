class SchoolInftastructures{

    getAddInfrastructureBttn(){
        return cy.get('div.add-infra-btn')
    }

    getPopUpAddInfrastructureTitle(){
        return cy.get('div.header-row')
    }
   
}
module.exports = new SchoolInftastructures()