import locators from '../fixtures/locators.json'

describe('template spec', () => {
  
  it('fills visa application form and validates success message', () => {
    cy.visit('cypress/test.html');

    cy.get(locators.fullNameInput).clear().type('John Doe');
    cy.get(locators.passportNumberInput).clear().type('ABC123456');
    cy.get(locators.countrySelect).select('USA');
    cy.get(locators.purposeTextArea).clear().type('Tourism');
    cy.get(locators.genderMaleRadio).click({ force: true });
    cy.get(locators.visaTypeTouristCheckbox).click({ force: true });

    cy.get(locators.submitButton).click();

    cy.get(locators.successMessage)
      .should('be.visible')
      .should('have.css', 'background-color', 'rgb(223, 240, 216)')
      .should('contain', 'Registration successful!');
      cy.screenshot();

    });

});
