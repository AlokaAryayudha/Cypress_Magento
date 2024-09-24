import NavigationPage from "../support/Navigation"
import DataInvalid from "../fixtures/DataInvalid.json"
import UserData from "../fixtures/UserData.json"

describe('login test', () => {
    beforeEach( () => {
        cy.homepage({ timeout: 6000 })
        cy.contains("Sign In").click()
    });

    it('Login Page Loaded', () => {
        const navigationPage = new NavigationPage();
        navigationPage.verifyLoginPage()
    })

    it('Login Success', () => {
        const navigationPage = new NavigationPage()
        navigationPage.inputCredentials()
    })

    it('Login Failed', () => {
        cy.get('#email').type('johnn@gmail.com')
        cy.get('#pass').type('123')
        cy.get('#send2').click({ timeout: 3000 })
        cy.get('.message-error').should('be.visible')
    })

}) 