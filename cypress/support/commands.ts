/// <reference types="cypress" />
import { todoText } from '../fixtures/example.json'

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
declare global {
  namespace Cypress {
    interface Chainable {
        addToDoItem(): Chainable<void>
        toggleLastToDoItem(): Chainable<void>
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

Cypress.Commands.add('toggleLastToDoItem', () => {
    cy.get('[data-test-id="todoItemCheckbox"]:last').as('ToDoItemCheckbox')
    cy.get('@ToDoItemCheckbox').click()
}) 

Cypress.Commands.add('addToDoItem', () => {
    cy.get('[data-test-id="todoText"]').as('ToDoInput')
    cy.get('[data-test-id="addTodo"]').as('ToDoAdd')
    cy.get('@ToDoInput').type(todoText)
    cy.get('@ToDoAdd').click()
})
