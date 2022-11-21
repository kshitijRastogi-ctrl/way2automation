import LandingPage from "../page-objects/pages/LandingPage";
import Manager from "../interface/managerLoginInterface";
import AddCustomerPage from "../page-objects/pages/AddCustomerPage";
import ManagerLoginPage from "../page-objects/pages/ManagerLoginPage";
import ShowCustomerPage from "../page-objects/pages/ShowCustomerPage";

const landingPage = new LandingPage()
const addCustomer = new AddCustomerPage()
const managerLogin = new ManagerLoginPage()
const showCustomerPage = new ShowCustomerPage()

export default class ManagerLogin implements Manager {


    verifyCustomerAddition(firstName: string, lastName: string, postCode: string) {
        let customer_id: string
        cy.on('window:alert', (str) => {
            customer_id = str.substring(str.indexOf(":") + 1, str.length)
            var expectedText = "Customer added successfully with customer id :" + customer_id
            var stringDisplayed = str
            expect(stringDisplayed).to.equal(expectedText)
        })
            .then(() => {
                cy.log(customer_id)
                this.verifyCustomerDetails(firstName, lastName, postCode, customer_id)
            })
    }

    clickManagerLogin() {
        landingPage.clickManagerLoginBtn()
    }


    addCustomer(firstName: string, lastName: string, postCode: string) {
        managerLogin.clickAddCustomerBtn()
        addCustomer.clickAddCustomerButton()
        addCustomer.verifyAddCustomerForm()
        addCustomer.fillAddCustomerform(firstName, lastName, postCode)
        addCustomer.clickAddCustomerButton()
    }

    verifyCustomerDetails(firstName: string, lastName: string, postCode: string, customer_id: string) {
        managerLogin.clickCustomerBtn()
        showCustomerPage.validateCustomerList(customer_id,firstName,lastName,postCode)

    }

}


