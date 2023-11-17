Cypress.Commands.add('fillContactForm', (name, email, phoneNumber, message) => {
    cy.get('[id="name"]').type(name)
    cy.get('[id="email"]').type(email)
    cy.get('[id="phone"]').type(phoneNumber)
    cy.get('[name="message"]').type(message)
})

