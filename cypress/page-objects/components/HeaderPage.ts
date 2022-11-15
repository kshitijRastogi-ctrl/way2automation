export default class Header {
     bankLogo = "//*[@class='mainHeading']"
     homeBtn = "//*[@class='btn home']"
     logOutBtn = "//*[@class='btn logout']"

     verifyBankLogo() {
        cy.verifyElementByXpath(this.bankLogo);
    }

     verifyHomeBtn() {
        cy.verifyElementByXpath(this.homeBtn);
    }

     verifyLogOutBtn() {
        cy.verifyElementByXpath(this.logOutBtn);
    }

     clickLogOutBtn() {
        cy.clickElementByXpath(this.logOutBtn)
    }

     clickHomeBtn() {
        cy.clickElementByXpath(this.homeBtn)
    }

}