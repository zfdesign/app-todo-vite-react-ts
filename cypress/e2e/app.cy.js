/// <reference types="Cypress" />
import { todoText } from '../fixtures/example.json'

describe('Given My To Do app', () => {
    before(() => {
        cy.visit('/')
    })



    context('When loaded', () => {
       
        it('Then To Do input and empty list exists', () => {
            // set
            cy.get('[data-test-id="myToDoApp"]').as('ToDoApp')
            cy.get('[data-test-id="todoText"]').as('ToDoInput')
            cy.get('[data-test-id="addTodo"]').as('ToDoAdd')
            cy.get('[data-test-id="todoEmptyListMessage"]').as('ToDoEmptyListMessage')

            // assert
            cy.get('@ToDoApp').should('be.visible')
            cy.get('@ToDoInput').should('be.visible')
            cy.get('@ToDoAdd').should('be.visible')
            cy.get('@ToDoEmptyListMessage').should('be.visible')
        })

        it('Then I am able to create a To Do item', () => {
            // set
            cy.addToDoItem()
            
            // assert
            cy.get('[data-test-id="todoList"]').should('be.visible')
            cy.get('[data-test-id="todoItemCheckbox"]').should('be.visible')
            cy.get('[data-test-id="todoItemText"]').should('be.visible')
            cy.get('[data-test-id="todoItemRemove"]').should('be.visible')
        })

        it('Then I am able to complete a To Do item', () => {
            // set
            cy.addToDoItem()
            cy.toggleLastToDoItem()

            // assert
            cy.get('[data-test-id="todoListCompleted"]').within(() => {
                cy.get('[data-test-id="todoItemCheckbox"]:last').as('ToDoItemCompletedCheckbox')
                cy.get('@ToDoItemCompletedCheckbox').should('be.checked')
                cy.get('[data-test-id="todoItemText"]').should('have.class', 'u-line-through')
            })
        })

        xit('Then I am able to set item to incomplete', () => {
            // set
            cy.get('[data-test-id="todoListCompleted"]').within((completedList) => {
                cy.toggleLastToDoItem()
            })
            
            // assert
            cy.get('[data-test-id="todoListCompleted"]').should('not.exist')
        })

        it('Then I am able to remove a To Do item', () => {
            // set
            cy.get('[data-test-id="todoItem"]:last').within((todo) => {
                cy.get('[data-test-id="todoItemRemove"]').click()
                cy.get(todo).should('not.exist')
            })
        })
    })

})