import locators from '../fixtures/locators.json'

//Cypress._.times(100, () => {
  

describe('Visa Registration Form Tests', () => {
  
  it('Fill visa application form and validates success message', () => {
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

    it('Should display all the HTML controls', () => {
      cy.visit('cypress/test.html');

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
