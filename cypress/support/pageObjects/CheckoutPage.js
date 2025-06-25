// Page Object for the SauceDemo checkout information form.
// Note: Cypress .type() cannot accept an empty string.
// To test validation of required fields (e.g., missing first name), type values only when non-empty.

class CheckoutPage {
  fillInformation(firstName, lastName, postalCode) {
    // Type first name only if value is provided (Cypress limitation workaround)
    if (firstName) {
      cy.get('[data-test="firstName"]').type(firstName);
    }
    // Type last name only if value is provided
    if (lastName) {
      cy.get('[data-test="lastName"]').type(lastName);
    }
    // Type postal code only if value is provided
    if (postalCode) {
      cy.get('[data-test="postalCode"]').type(postalCode);
    }
  }
}

export default CheckoutPage;
