import Manager from "../../interface/managerLoginInterface";
import ManagerLoginPage from "../../page-objects/pages/ManagerLoginPage"
import ManagerLogin from "../../implementation/manager"

describe('Verify Manager Login Journey', () => {
    let manager: Manager = new ManagerLogin();
    const managerLoginPage = new ManagerLoginPage()
    before(() => {
        cy.fixture('createAccountInput').then(function (data) {
            this.data = data
        })
    })

    beforeEach(() => {
        cy.visit("angularjs-protractor/banking/#/login")
        manager.clickManagerLogin()
        cy.location('href').should('contain', '/manager')

    })


    context('Bank Manager Login', () => {

        it('Verify Manager Login Page headers', () => {
            cy.validateHeaderSection()
        })

        it('Verify the view after Bank ManagerLogin', () => {
            managerLoginPage.verifyAddCustomerBtn()
            managerLoginPage.verifyOpenAccountBtn()
            managerLoginPage.verifyCustomerBtn()
        })

    })

})