describe('Nav bar', () => {
  it('Logo should take you to the home page', () => {
    cy.visit('/')
    cy.get('.logo-item').click()
    cy.url().should('include', 'home')
  })
  it('Nav>Home should take you to the home page', () => {
    cy.visit('/')
    cy.get('.nav-item').eq(0).contains('HOME')
    cy.get('.nav-item').eq(0).click()
    cy.url().should('include', 'home')
  })
  it('Nav>Task List should take you to the task page', () => {
    cy.visit('/')
    cy.get('.nav-item').eq(1).contains('TASK LIST')
    cy.get('.nav-item').eq(1).click()
    cy.url().should('include', 'task')
  })
})