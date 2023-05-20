class AdminReportPage {

    //Tc_001 Verify that School Admin can Edit the TopSchool Gradebook Template

    getAdminReportsSideMenubarReportTab() {
        return cy.get('div.side-nav-bar ').invoke('show').contains('Reports')
    }

    getAdminReportsStudentGradebookTab() {
        return cy.get('div[class="content-popover-reports"]').eq(0)
    }

    getAdminReportsVerifyStudentGradebookText() {
        return cy.contains('Student Gradebook')
    }

    getAdminReportsGradeEditButton(Grades) {
        return cy.xpath('(//p[contains(text(),"' + Grades + '")]/ancestor::tr//button[contains(.,"Pending")]//following::img[@aria-label="Edit"])[1]')
    }

    getAdminReportsVerifyBasicTemplateDetailsText() {
        return cy.contains('Basic Template Details')

    }

    getCreateNewTemplateGradeDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(0)
    }

    getCreateNewTemplateSectionDropdown() {
        return cy.get('[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiOutlinedInput-input"]').eq(0)
    }

    getCreateNewTemplateNumberOftermsDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(1)
    }

    getCreateNewTemplateSelectNumberOftermsValue() {
        return cy.get('li[data-value="1"]')
    }

    getCreateNewTemplatePublishGradebookInDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(2)
    }

    getCreateNewTemplateSelectPublishGradebookInValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Mark')
    }

    getCreateNewTemplateAddTestTypeButton() {
        return cy.contains('+ Add Test Type')
    }

    getCreateNewTemplateTermDropdown() {
        return cy.get('div#mui-component-select-testType')
    }

    getCreateNewTemplateTermCheckbox() {
        return cy.get('li[data-value="1"]')
    }

    getCreateNewTemplateTestTypeDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(3)

    }

    getCreateNewTemplateSelectTestTypeValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Test 1')
    }

    getCreateNewTemplateMaxMarksDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(4)
    }

    getCreateNewTemplateSelectMaxMarksValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('100')
    }

    getCreateNewTemplateAddSubjectButton() {
        return cy.contains(' + Add Subject ')
    }

    getCreateNewTemplateSubjectDropdown() {
        return cy.get('div#mui-component-select-subject')
    }

    getCreateNewTemplateSelectSubjectvalue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"] li').eq(1)
    }

    getCreateNewTemplateAddTheoryAndPracticleButton() {
        return cy.contains('+ Add Theory and Practical')
    }

    getAddTheoryAndPracticleTestTypeDropdown() {
        return cy.get('.CreateNewTemplate_crtNewTempCodeSubInner__1YOJm > .adminTempContSelctFild > .MuiInputBase-root > #demo-simple-select-helper')
    }

    getAddTheoryAndPracticleTestTypeValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Test 1')
    }

    getCreateNewTemplateTheoryTextfield() {
        return cy.get('input[name="theoryMarks"]')
    }

    getCreateNewTemplatePracticleTextfield() {
        return cy.get('input[name="practicalMarks"]')
    }

    getDelButton() {
        return cy.get(':nth-child(4) > .MuiButton-root')
    }

    getCreateNewTemplateAddActivityTextfield() {
        return cy.get('input[name="activity"]')
    }

    getCreateNewTemplateAddPrincipleSignatureButton() {
        return cy.contains("Add Principal's Signature")
    }

    getCreateNewTemplateVerifyAddSignatureTxt() {
        return cy.contains('Add Signature')
    }

    getCreateNewTemplateUploadImage() {
        return cy.get('.fileimages > input')
    }

    getSaveButton() {
        return cy.get('[data-testid="savvBtn"]')
    }

    getCreateNewTemplateSaveAndPreviewBtn() {
        return cy.xpath("//button[contains(.,'Save And Preview')]")
    }

    getPreviewScreenSubDetailsText() {
        return cy.get('td[class="schlTbleRptCell2"]')
    }

    getPreviewScreenCoScholasticActivitiesTxt() {
        return cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)')
    }

    getPreviewScreenPublishButton() {
        return cy.xpath('//button[contains(.,"Publish")]')
    }

    getPreviewScreenYesPublishButton() {
        return cy.xpath('//button[contains(.,"Yes, Publish")]')
    }

    getStudentGradeBookTxt() {
        return cy.xpath('//p[contains(.,"Student Gradebook")]')
    }

    getVerifyGradeContainPublishedStatus(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Published")]')
    }

    getPublishedStatusToggleButton(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Published")]/../descendant::span[@class="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9"]')
    }

    getYesUnfinishButton() {
        return cy.xpath('//span[contains(.,"Yes, Unpublish")]')
    }

    getVerifyGradebookUnfinishedSuccesfullyTxt() {
        return cy.get('div[class="font-cls"]')
    }

    getVerifyGradeContainDraftStatus(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Draft")]')
    }

    getDraftStatusToggleButton(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Draft")]/../descendant::span[@class="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9"]')
    }

    getDeleteIcon(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Draft")]/../descendant::img[@aria-label="Delete"]')
    }

    getDeleteButton() {
        return cy.xpath('//span[contains(.,"Delete")]')
    }


    //Tc_002 Verify that School Admin can Create the Gradebook Template
    getAdminReportsGradeViewButton(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Pending")]/../descendant::button[@aria-label="View"]')
    }

    getCreateNewButton() {
        return cy.xpath('//span[contains(.,"Create New")]')
    }

    getCreateNewTemplateSelectGradeDropdownValue() {
        return cy.get('ul[class="MuiList-root MuiMenu-list MuiList-padding"] li')
    }

    getCreateNewTemplateSelectSectionDropdownValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"] li').contains('B')
    }

    getCountinueButton() {
        return cy.xpath('//button[contains(.,"Continue")]')
    }

    getAddActivityButton() {
        return cy.xpath('//button[contains(.,"+ Add Activity")]')
    }


    // Tc-003 Verify that School Admin can Delete the Gradebook Template
    getCreatetemplateButton() {
        return cy.xpath(' //a[contains(.,"Create Template")]')
    }

    getSaveAsDraftButton() {
        return cy.xpath('//button[contains(.,"Save As Draft")]')
    }

    getGradeCheckBoxStudentGradeBookPage(Grades) {
        return cy.xpath('//p[contains(.,"' + Grades + '")]/ancestor::tr/descendant::button[contains(.,"Draft")]/ancestor::tr/descendant::input[@class="PrivateSwitchBase-input css-1m9pwf3"]')

    }

    getDeleteIconStudentGradeBookPage() {
        return cy.xpath('//button[contains(.,"Delete")]')

    }

    //To Create Template
    CreateNewTemplate(Grade,Section,Practicle, AddActivityName, SignatureFile) {
       
        this.getCreatetemplateButton().click()
        this.getCreateNewTemplateGradeDropdown().click()
        this.getCreateNewTemplateSelectGradeDropdownValue().contains(Grade).click()
        this.getCreateNewTemplateSectionDropdown().click()
        this.getCreateNewTemplateSelectSectionDropdownValue().contains(Section).click()
        cy.get('body').click()
        this.getCreateNewTemplateNumberOftermsDropdown().click()
        this.getCreateNewTemplateSelectNumberOftermsValue().click()
        this.getCreateNewTemplatePublishGradebookInDropdown().click()
        this.getCreateNewTemplateSelectPublishGradebookInValue().click({ force: true })
        this.getCountinueButton().click()
        this.getCreateNewTemplateAddTestTypeButton().click()
        this.getCreateNewTemplateTermDropdown().click().wait(1000)
        this.getCreateNewTemplateTermCheckbox().click()
        cy.get('body').click()
        this.getCreateNewTemplateTestTypeDropdown().click()
        this.getCreateNewTemplateSelectTestTypeValue().click()
        this.getCreateNewTemplateMaxMarksDropdown().click()
        this.getCreateNewTemplateSelectMaxMarksValue().click()
        this.getCountinueButton().click()
        this.getCreateNewTemplateAddSubjectButton().click()
        this.getCreateNewTemplateSubjectDropdown().click()
        this.getCreateNewTemplateSelectSubjectvalue().click()
        this.getCreateNewTemplateAddTheoryAndPracticleButton().click()
        this.getAddTheoryAndPracticleTestTypeDropdown().click({ force: true })
        this.getAddTheoryAndPracticleTestTypeValue().click()
        this.getCreateNewTemplatePracticleTextfield().click().type(Practicle)
        this.getCountinueButton().click()
        this.getAddActivityButton().click()
        this.getCreateNewTemplateAddActivityTextfield().type(AddActivityName)
        this.getCountinueButton().click()
        this.getCreateNewTemplateAddPrincipleSignatureButton().click()
        this.getCreateNewTemplateUploadImage().selectFile(SignatureFile)
        this.getSaveButton().click({ force: true }).wait(1000)
        this.getSaveAsDraftButton().click({ force: true })

    }


    //Tc_004 Verify that School Admin can view the Gradebook Template
    getGradeDraftStatusViewIcon(DraftStatusGrade){
       return cy.xpath('//p[contains(text(),"'+DraftStatusGrade+'")]/ancestor::tr/descendant::button[contains(.,"Draft")]/ancestor::tr/descendant::button[@aria-label="View"]')
    }

    getPreviewButton(){
        return cy.xpath('//span[contains(.,"Preview")]')
    }

    getPublishedStatusViewIcon(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Published")]/../descendant::button[@aria-label="View"]')
    }


    //Tc_005 Verify that School Admin can search and select filters in template  Template
    getSearchTextfield(){
        return cy.get('input[placeholder="Search a template"]')
    }

    getAllDropdown(){
        return cy.get('div[id="demo-simple-select"]')
    }

    getGradesList(){
        return cy.get('p[class="MuiTypography-root MuiTypography-body1 name css-9l3uo3"] ')
    }

    getTopSchoolBtn(){
        return cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"] li').contains('TopSchool')
    }

    getMySchoolBtn(){
        return cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"] li').contains('My School')
    }


// Tc_006 Verify that School Admin can Add results for respective students
    getGradeBookTab(){
        return cy.xpath('//button[contains(.,"GradeBook")]')
    }

    getGradeBookPagePendingStatus(){
        return cy.xpath('//td[contains(.,"kumar")]/parent::tr//td[contains(.,"Pending")]')
    }


    getArrowForwordIcon(){
        return cy.get('[data-testid="ArrowForwardIosIcon"]')
    }

    getEditButton(){
        return cy.xpath('//button[contains(.,"Edit")]')
    }

    getTheoryTextField(){
        return cy.get('input[type="number"]').eq(0)
    }

    getPracticleTextfield(){
        return cy.get('input[type="number"]').eq(1)
    }

    getCoScholasticActivities1_TxtField(){
        return cy.contains('Activity 1')

    }

    getCoScholasticActivities2_TxtField(){
        return cy.contains('Activity 2')
    }

    getCoScholasticActivities3_TxtField(){
        return cy.contains('Activity 3')
    }

    getCoScholasticActivities4_TxtField(){
       return cy.contains('Activity 4')
    }

    getSaveBtn(){
        return cy.xpath('//button[contains(.,"Save")]')
    }

    getRemarksTextfield(){
        return cy.get('textarea[id="outlined-multiline-static"]')
    }

    getTotalPercentage(){
        return cy.get('div[class="StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO"]').eq(0)
    }

    getResult(){
        return cy.get('div[class="StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO"]').eq(3)
    }

    getUpdatedStatus(){
        return cy.xpath('//td[contains(.,"kumar")]/parent::tr//td[contains(.,"Updated")]')
    }

    getCancelButton(){
        return cy.xpath('//button[contains(.,"Cancel")]')
    }

    getShowGradingSystemDropdown(){
        return cy.xpath(' //button[contains(.,"Grading System")]')
    }

    getPreviewAndPrintButton(){
        return cy.xpath('//button[contains(.,"Preview & Print")]')
    }

    getPublishedStatus(){
        return cy.xpath('//td[contains(.,"kumar")]/parent::tr//td[contains(.,"Published")]')
    }










}

module.exports = new AdminReportPage()

