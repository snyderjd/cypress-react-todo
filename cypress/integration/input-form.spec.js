describe('Input form', function() {
    it('focuses input on load', function() {
        cy.visit('http://localhost:3030')

        cy.focused().should('have.class', 'new-todo')
    })

    it.only('accepts input', function() {
        const typedText = 'Buy Milk'

        cy.visit('http://localhost:3030')
        cy.get('.new-todo').type(typedText)
            .should('have.value', typedText)
    })
})