describe('Login', () => {
  it('Initial page should be login page', () => {
    cy.visit('/')
    cy.contains('Login')
  })
  it('Should not login if the form is invalid', () => {
    cy.visit('/')
    cy.get('button').click();
    cy.url().should('not.include','home')
    cy.login('Antonio', '12')
    cy.url().should('not.include','home')
  })
  it('Should login if the form is valid', () => {
    cy.login('Antonio', '123456789')
    cy.url().should('include','home')
  })
})