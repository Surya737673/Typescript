/// <reference types="cypress" />
describe("Test Todo", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo");
    })
    // it("should show basic structure", () => {
    //     cy.get(".new-todo").should("exist")
    //     cy.get(".todo-count").should("exist")
    //     cy.get(".filters").should("exist")
    // })
    // it("should input value", () => {
    //     cy.get(".todo-list").children().should("have.length", 2)
    //     cy.get(".new-todo").type("Automated Input{enter}")
    //     cy.get(".todo-list").children().should("have.length", 3)
    // })
    // it("should input length", () => {
    //     cy.get(".todo-count strong").should("have.text", 2)
    //     cy.get(".new-todo").type("Automated Input{enter}")
    //     cy.get(".todo-count strong").should("have.text", 3)
    // })
    it("should have focus", () => {
        cy.get("").should("")
        cy.get(".new-todo").type("Automated Input{enter}")
        cy.get(".todo-count strong").should("have.text", 3)
    })

})