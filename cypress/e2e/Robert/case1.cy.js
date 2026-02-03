/// <reference types="cypress" />

describe('Case 1 - Basic Navigation and Interaction', () => {
	it('visits Baidu, searches for cypress and asserts results', () => {
		// Visit Baidu
		cy.visit('https://www.sogou.com')

		// Type the query and submit. Use multiple selectors for robustness.
		cy.get('[name="query"]').type('cypress{enter}')

		// Assert the search input on results page contains the query
		cy.get('#querybox_up > .qborder > .qborder2 > [name="query"]').should('have.value', 'cypress')

		// // Assert URL contains the query parameter (wd=cypress)
		cy.url().should('include', 'sogou')

		// // Assert the page shows results containing the term (case-insensitive)
		cy.contains(/cypress/i).should('be.visible')
	})
})