export default  interface Manager {
    clickManagerLogin();
    addCustomer(firstName?:string, lastName?:string, postCode?:string);
    verifyCustomerAddition(firstName?:string, lastName?:string, postCode?:string);
    }