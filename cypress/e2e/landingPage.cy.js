/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Fill Contact Form', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })

    it('Try to submit the form without checking the ReCaptcha', () => {
        cy.fillContactForm(faker.person.firstName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraph())
        cy.get('form').submit()
        cy.get('.validator_status').should('contain.text', "Please confirm you're human")
    })
})