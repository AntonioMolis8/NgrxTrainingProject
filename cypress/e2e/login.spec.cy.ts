describe('Login', () => {
    it('Should not login if the form is invalid', () =>{
        cy.visit('/')
        cy.url().should('include','login')
        cy.contains('Login')
    })
})