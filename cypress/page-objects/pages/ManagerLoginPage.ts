export default class ManagerLoginPage{

     addCustomerBtn="//*[@ng-click='addCust()']"
     openAccountBtn="//*[@ng-click='openAccount()']"
     customerBtn="//*[@ng-click='showCust()']"

     verifyAddCustomerBtn(){
        cy.verifyElementByXpath(this.addCustomerBtn)
    }

     clickAddCustomerBtn(){
        cy.clickElementByXpath(this.addCustomerBtn)
    }

     verifyOpenAccountBtn(){
        cy.verifyElementByXpath(this.openAccountBtn)
    }

     clickOpenAccountBtn(){
        cy.clickElementByXpath(this.openAccountBtn)
    }

     verifyCustomerBtn(){
        cy.verifyElementByXpath(this.customerBtn)
    }

     clickCustomerBtn(){
        cy.clickElementByXpath(this.customerBtn)
    }
}