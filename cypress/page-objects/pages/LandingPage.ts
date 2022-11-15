
export default class LandingPage {
    customerLoginBtn = '//button[@ng-click="customer()"]';
    managerLoginBtn = '//button[@ng-click="manager()"]'


    clickCustomerLoginBtn() {
        cy.clickElementByXpath(this.customerLoginBtn)
    }

    clickManagerLoginBtn() {
        cy.clickElementByXpath(this.managerLoginBtn)
    }

    verifyCustomerLoginBtn() {
        cy.verifyElementByXpath(this.customerLoginBtn)
    }

    verifyManagerLoginBtn() {
        cy.verifyElementByXpath(this.managerLoginBtn)
    }

}