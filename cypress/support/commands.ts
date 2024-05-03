/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable {
        login(username: string, password: string): typeof login;
        addTask(taskId: string, title: string, userId: string): typeof addTask;
        deleteTask(itemNumber: number): typeof deleteTask;
    }
}

function login(username: string, password: string): void {
    cy.visit('/')
    cy.get('input[name="user-name"]').type(username);
    cy.get('input[name="user-password"]').type(password);
    cy.get('button').click();
}

function addTask(taskId: string, title: string, userId: string): void {
    cy.get('input[name="task_id"]').type(taskId);
    cy.get('input[name="task_title"]').type(title);
    cy.get('input[name="task_user"]').type(userId);
    cy.get('form > button').click();
}

function deleteTask(itemNumber: number): void {
    cy.get('.task-list li').eq(itemNumber).find('.remove-button').click()
}

Cypress.Commands.add('login', login);
Cypress.Commands.add('addTask', addTask);
Cypress.Commands.add('deleteTask', deleteTask);