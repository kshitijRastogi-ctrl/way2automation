import LandingPage from "../page-objects/pages/LandingPage";
import Manager from "../interface/managerLoginInterface";
import AddCustomerPage from "../page-objects/pages/AddCustomerPage";
import ManagerLoginPage from "../page-objects/pages/ManagerLoginPage";

const landingPage = new LandingPage()
const addCustomer = new AddCustomerPage()
const managerLogin = new ManagerLoginPage()

export default class ManagerLogin implements Manager {

    verifyCustomerAddition() {
        cy.on('window:alert',(str)=>{
            const customer_id=str.substring(str.indexOf(":")+1,str.length)+'abc'
            const expectedText = "Customer added successfully with customer id :"
            const stringDisplayed= str
            cy.log("Actual string:"+stringDisplayed)
            cy.log("Expected String :"+expectedText)
            expect(stringDisplayed).to.equal(expectedText)
            //str.includes("Customer added successfully with customer id :"+customer_id)
            //cy.should(str).contains("Customer added successfully with customer id :"+customer_id)
            //assert(str.includes(expectedText),'FAILED')
            
        })
    }
    
    clickManagerLogin() {
        landingPage.clickManagerLoginBtn() 
    }

    addCustomer(firstName: string, lastName: string, postCode: string){
        managerLogin.clickAddCustomerBtn()
        addCustomer.clickAddCustomerButton()
        addCustomer.verifyAddCustomerForm()
        addCustomer.fillAddCustomerform(firstName,lastName,postCode)
        addCustomer.clickAddCustomerButton()
    }



}
