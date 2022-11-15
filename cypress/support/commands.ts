import HeaderPage from "../page-objects/components/HeaderPage"
import LandingPage from "../page-objects/pages/LandingPage"

/// <reference types="cypress-xpath" />



const header=new HeaderPage()
const landingPage = new LandingPage()


Cypress.Commands.add('clickElementByXpath',(element)=>{
    cy.log(element)
    cy.xpath(element).click()
})

Cypress.Commands.add('verifyElementByXpath',(element)=>{
    cy.xpath(element).should('exist')
})

Cypress.Commands.add('sendTextToInputXpath',(element,text)=>{
    cy.xpath(element).type(text)
})

Cypress.Commands.add('validateHeaderSection',()=>{
    header.verifyBankLogo()
    header.verifyHomeBtn()
})

Cypress.Commands.add('clickManagerLogin',()=>{
    cy.visit("angularjs-protractor/banking/#/login")
    landingPage.clickManagerLoginBtn()
    cy.location('href').should('contain', '/manager')
})
