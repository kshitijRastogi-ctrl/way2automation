export default class AddCustomerPage {

     firstNameLabel = "//label[text()='First Name :']"
     firstNameInput = "//label[text()='First Name :']/following-sibling::input"
     lastNameLabel = "//label[text()='Last Name :']"
     lastNameInput = "//label[text()='Last Name :']/following-sibling::input"
     postCodeLabel = "//label[text()='Post Code :']"
     postCodeInput = "//label[text()='Post Code :']/following-sibling::input"
     addCustomerButton = "//button[@type='submit']"

     verifyAddCustomerForm() {
        cy.verifyElementByXpath(this.firstNameLabel)
        cy.verifyElementByXpath(this.lastNameLabel)
        cy.verifyElementByXpath(this.postCodeLabel)
        cy.verifyElementByXpath(this.addCustomerButton)
    }

     fillAddCustomerform(firstName: string, lastName: string, postCode: string) {
        
        cy.sendTextToInputXpath(this.firstNameInput, firstName)
        cy.sendTextToInputXpath(this.lastNameInput, lastName)
        cy.sendTextToInputXpath(this.postCodeInput, postCode)
    }

     clickAddCustomerButton(){
        cy.clickElementByXpath(this.addCustomerButton)
    }
}