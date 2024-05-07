describe('Task', () => {
  beforeEach(() => {
    cy.visit('/task')
  })
  it('Task page should contain Task Form and Task List', () => {
    cy.get('app-task-form')
    cy.get('app-task-list')
  })
  it('Add task', () => {
    cy.get('.task-list li').its('length').then(initialLength => {
      cy.addTask('500', 'This is a new task', '1')
      cy.get('.task-list li').its('length').then(finalLength => {
        expect(finalLength).to.eq(initialLength + 1)
      })
    })
    cy.get('.task-list li').eq(0).contains('This is a new task')
  })
  it('Delete task', () => {
    cy.get('.task-list li').its('length').then(initialLength => {
      cy.deleteTask(0)
      cy.get('.task-list li').its('length').then(finalLength => {
        expect(finalLength).to.eq(initialLength - 1)
      })
    })
  })
})