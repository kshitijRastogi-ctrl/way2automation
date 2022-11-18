import LandingPage from "../page-objects/pages/LandingPage";
import Manager from "../interface/managerLoginInterface";
import AddCustomerPage from "../page-objects/pages/AddCustomerPage";
import ManagerLoginPage from "../page-objects/pages/ManagerLoginPage";

const landingPage = new LandingPage()
const addCustomer = new AddCustomerPage()
const managerLogin = new ManagerLoginPage()

export default class ManagerLogin implements Manager {
   // customer_id: string;
    //expectedText: string;
   // stringDisplayed:string;

    verifyCustomerAddition(firstName: string, lastName: string, postCode: string) {
        let customer_id:string
        cy.on('window:alert',(str)=>{
            customer_id=str.substring(str.indexOf(":")+1,str.length)
            var expectedText = "Customer added successfully with customer id :"+customer_id
            var stringDisplayed= str
            expect(stringDisplayed).to.equal(expectedText)
            
        })

        .then(()=>{
            cy.log(customer_id)
            this.verifyCustomerDetails(firstName,lastName,postCode,customer_id)
        })
        //cy.log(customer_id)
        
    }
    
    clickManagerLogin() {
        landingPage.clickManagerLoginBtn() 
    }

      handlealert(){
        cy.on('window:alert',(str)=>{
            var customer_id=str.substring(str.indexOf(":")+1,str.length)
            var expectedText = "Customer added successfully with customer id :6"
            var stringDisplayed= str
            expect(stringDisplayed).to.equal(expectedText)
            cy.log(customer_id)
           return customer_id
        })
    }

    addCustomer(firstName: string, lastName: string, postCode: string){
        managerLogin.clickAddCustomerBtn()
        addCustomer.clickAddCustomerButton()
        addCustomer.verifyAddCustomerForm()
        addCustomer.fillAddCustomerform(firstName,lastName,postCode)
        addCustomer.clickAddCustomerButton()
    }

    verifyCustomerDetails(firstName:string, lastName: string, postCode: string, customer_idd:string) {
        cy.log('customer_idd: '+customer_idd)
        managerLogin.clickCustomerBtn()        
    }

}
   

