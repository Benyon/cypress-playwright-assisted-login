/// <reference types="cypress" />


it('Log into using Playwright and apply to Cypress', () => {
  cy.visit('/');
  cy.get('#onetrust-accept-btn-handler').click();
  cy.log('Creating BBC session and pulling cookies to apply to Cypress.')
  cy.task('getLoggedInSession', null, { log: false }).then(cookies => {
    cy.log('Setting cookies from Playwright session')
    for (const cookie of cookies) {
      cy.setCookie(cookie.name, cookie.value, { log: false })
    }
  })
  cy.reload();
})

it('The test can be simplified with a Cypress.command', () => {
  cy.visit('/')  
  cy.click('#onetrust-accept-btn-handler');
  cy.getLoggedInSession();
})

