describe('Nav bar', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Logo should take you to the home page', () => {
    cy.get('.logo-item').click()
    cy.url().should('include', 'home')
  })
  it('Nav>Home should take you to the home page', () => {
    cy.get('.nav-item').eq(0).contains('HOME')
    cy.get('.nav-item').eq(0).click()
    cy.url().should('include', 'home')
  })
  it('Nav>Task List should take you to the task page', () => {
    cy.get('.nav-item').eq(1).as('nav-item-task') //Just to practice
    cy.get('@nav-item-task').contains('TASK LIST')
    cy.get('@nav-item-task').click()
    cy.url().should('include', 'task')
  })
})