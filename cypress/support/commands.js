// ***********************************************
// This example commands.js shows you how to
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


Cypress.Commands.add('customClick', { prevSubject: true }, (subject) => {
    cy.wrap(subject).click({ force: true });
  });
  
  Cypress.Commands.add('customType', { prevSubject: true }, (subject, text) => {
    cy.wrap(subject).clear().type(text);
  });

  Cypress.Commands.add('shadowElement', { prevSubject: true }, (subject, locator) => {
    return cy.get('my-form').shadow().find(locator).get();


  });
  
  