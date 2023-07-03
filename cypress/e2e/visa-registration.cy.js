import locators from '../fixtures/locators.json'
import { faker } from '@faker-js/faker';

//Cypress._.times(100, () => {
  

describe('Visa Registration Form Tests', () => {
  
  it('Fill visa application form and validates success message', () => {
    cy.visit(Cypress.env('appUrl'));

    cy.get(locators.fullNameInput).clear().type(faker.internet.userName());
    cy.get(locators.passportNumberInput).clear().type(faker.company.name());
    cy.get(locators.countrySelect).select('USA');
    cy.get(locators.purposeTextArea).clear().type(faker.company.name());
    cy.get(locators.genderMaleRadio).click({ force: true });
    cy.get(locators.visaTypeTouristCheckbox).click({ force: true });

    cy.get(locators.submitButton).click();

    cy.get(locators.successMessage)
      .should('be.visible')
      .should('have.css', 'background-color', 'rgb(223, 240, 216)')
      .should('contain', 'Registration successful!');
      cy.screenshot();

    });

    it('Should display all the HTML controls', () => {
      cy.visit(Cypress.env('appUrl'));

      // Verify the visibility of each control using locators
      cy.get(locators.fullNameInput).should('be.visible');
      cy.get(locators.passportNumberInput).should('be.visible');
      cy.get(locators.countrySelect).should('be.visible');
      cy.get(locators.purposeTextArea).should('be.visible');
      cy.get(locators.genderMaleRadio).should('be.visible');
      cy.get(locators.genderFemaleRadio).should('be.visible');
      cy.get(locators.visaTypeTouristCheckbox).should('be.visible');
      cy.get(locators.visaTypeBusinessCheckbox).should('be.visible');
      cy.get(locators.submitButton).should('be.visible');
      cy.screenshot();
    });


});

//  });
