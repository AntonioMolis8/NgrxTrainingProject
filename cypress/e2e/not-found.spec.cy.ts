describe('Not found', () => {
  it('Not found page should appear for strange urls', () => {
    cy.visit('/msñms')
    cy.url().should('include', 'notFound')
  })
  it('Button should go to home page', () => {
    cy.visit('/msñms')
    cy.get('button').click()
    cy.url().should('include', 'home')
  })
})