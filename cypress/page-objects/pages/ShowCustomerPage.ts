export default class ShowCustomerPage{
    getCustomerFirstName="//tr[@class='ng-scope'][customer_id]/td[1]"
    getCustomerLastName="//tr[@class='ng-scope'][customer_id]/td[2]"
    getCustomerPostCode="//tr[@class='ng-scope'][customer_id]/td[3]"
    getCustomerAccountNumber="//tr[@class='ng-scope'][customer_id]/td[4]"
    getCustomerDeleteButton="//tr[@class='ng-scope'][customer_id]/td[5]/button"

    validateCustomerFirstName(customerId:string,firstName:string){
        this.getCustomerFirstName=this.getCustomerFirstName.replace("customer_id",customerId)
             cy.xpath(this.getCustomerFirstName).should('have.text',firstName)
             cy.log("firstName: "+firstName)
    }
    validateCustomerLastName(customerId:string,lastName:string){
        this.getCustomerLastName=this.getCustomerLastName.replace("customer_id",customerId)
             cy.xpath(this.getCustomerLastName).should('have.text',lastName)
             cy.log("lastName: "+lastName)
    }

    validateCustomerPostCode(customerId:string,postCode:string){
        this.getCustomerPostCode=this.getCustomerPostCode.replace("customer_id",customerId)
             cy.xpath(this.getCustomerPostCode).should('have.text',postCode)
             cy.log("postCode: "+postCode)
    }

    deleteCustomerEntry(customerId:string){
        this.getCustomerDeleteButton=this.getCustomerDeleteButton.replace("customer_id",customerId)
    }

    validateCustomerList(customer_id: string, firstName: string, lastName: string, postCode: string) {
        this.validateCustomerFirstName(customer_id,firstName)
        this.validateCustomerLastName(customer_id,lastName)
        this.validateCustomerPostCode(customer_id,postCode)

    }
}