describe('Input form', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('focuses input on load', function() {
        cy.focused().should('have.class', 'new-todo')
    })

    it('accepts input', function() {
        const typedText = 'Buy Milk'

        cy.get('.new-todo').type(typedText)
            .should('have.value', typedText)
    })
})