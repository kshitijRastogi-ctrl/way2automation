import LandingPage from "../../page-objects/pages/LandingPage"

describe('empty spec', () => {

  const landingPage = new LandingPage()

  beforeEach(() => {
    cy.visit("/angularjs-protractor/banking/#/login")
  })

  context('LandingPage', () => {

    it('Verify Landing Page Header', () => {
      cy.validateHeaderSection()
    })

    it('Verify Landing Page', () => {
      landingPage.verifyCustomerLoginBtn()
      landingPage.verifyManagerLoginBtn()
    })
  })
})