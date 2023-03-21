/// <reference types="cypress"/>
import data from "../fixtures/login.json"

describe('Login functionality', () => {

    it('Verify the login functionlity for valid credentials', () => {
        cy.visit('https://sandbox.opencv.fr/')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click()
        cy.wait(5000)
        cy.get('#input1').type(data.valid.email, { log: false })
        cy.get('#mat-select-value-1').click()
        cy.get(".mat-option-text").last().click()
        cy.get('#input3').type(data.valid.password, { log: false })
        cy.get('.login-btn').click()
        cy.wait(5000)
        cy.get('.search-crumb').should('have.text', 'Dashboard')
    })

    it('Verify the login functionlity for invalid credentials', () => {
        cy.visit('https://sandbox.opencv.fr/')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click()
        cy.wait(5000)
        cy.get('#input1').type(data.Invalid.email, { log: false })
        cy.get('#mat-select-value-1').click()
        cy.get(".mat-option-text").last().click()
        cy.get('#input3').type(data.Invalid.password, { log: false })
        cy.get('.login-btn').click()
        cy.get("div[role='alert']").should('have.text', ' Invalid Credentials ')
    })
})