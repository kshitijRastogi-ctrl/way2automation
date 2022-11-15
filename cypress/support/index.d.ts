declare namespace Cypress {
    interface Chainable<Subject = string> {
        clickElementByXpath(selector: string);
        verifyElementByXpath(selector: string);
        sendTextToInputXpath(selector: string,inputText : string);
        validateHeaderSection();
        clickManagerLogin();
    }
  }