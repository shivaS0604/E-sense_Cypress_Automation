



/// <reference types = "Cypress" />
import 'cypress-file-upload'


const adminschoolpage = require('../support/pageObjects/LMS/admin_Schoolpage.js')
Cypress.Commands.add('NavigateToSchoolInfrastructure',()=>{
    adminschoolpage.getSchoolSideBarNavigationImg().click()
    adminschoolpage.getSchoolInfrastructures().click()

})
