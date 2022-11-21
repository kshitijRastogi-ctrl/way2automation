import ManagerLogin from "../../implementation/manager"
import Manager from "../../interface/managerLoginInterface"

describe('Manager Can add Accounts', function()  {
    const manager: Manager = new ManagerLogin
    

    before(function()  {
        cy.fixture('createAccountInput').then(function(data) {
            this.data = data
        })
    })

    beforeEach(() => {
        cy.visit("angularjs-protractor/banking/#/login")
        manager.clickManagerLogin()
        cy.location('href').should('contain', '/manager')
    })

    context('Manager Customer Addition', function()  {
        it('Verify add customer after Bank ManagerLogin', function()  {
        manager.addCustomer(this.data.firstName, this.data.lastName, this.data.postCode)
        manager.verifyCustomerAddition(this.data.firstName, this.data.lastName, this.data.postCode)    
        cy.log("Is dollar: "+this.data.account.dollar)   
        })
    })
})