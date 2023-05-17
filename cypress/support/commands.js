/// <reference types = "Cypress" />


const adminschoolpage = require('../support/pageObjects/LMS/admin_Schoolpage.js')
Cypress.Commands.add('NavigateToSchoolInfrastructure',()=>{
    adminschoolpage.getSchoolSideBarNavigationImg().click()
    adminschoolpage.getSchoolInfrastructures().click()

})
