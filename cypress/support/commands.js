// Login as a given user (username, password)
Cypress.Commands.add('loginUser', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

// Add a specific product to cart by data-test value
Cypress.Commands.add('addToCart', (productDataTest) => {
  cy.get(`[data-test="${productDataTest}"]`).click();
});

// Go to cart page
Cypress.Commands.add('goToCart', () => {
  cy.get('.shopping_cart_link').click();
  cy.url().should('include', '/cart');
});

// Remove a specific product from cart by data-test value
Cypress.Commands.add('removeFromCart', (productDataTest) => {
  cy.get(`[data-test="${productDataTest}"]`).click();
});

// Start checkout process
Cypress.Commands.add('startCheckout', () => {
  cy.get('[data-test="checkout"]').click();
  cy.url().should('include', '/checkout-step-one');
});

// Fill checkout information (handles empty strings for negative tests)
Cypress.Commands.add('fillCheckoutInfo', (first, last, zip) => {
  if (first) cy.get('[data-test="firstName"]').type(first);
  if (last) cy.get('[data-test="lastName"]').type(last);
  if (zip) cy.get('[data-test="postalCode"]').type(zip);
});

// Continue checkout
Cypress.Commands.add('continueCheckout', () => {
  cy.get('[data-test="continue"]').click();
  cy.url().should('include', '/checkout-step-two');
});

// Finish checkout
Cypress.Commands.add('finishCheckout', () => {
  cy.get('[data-test="finish"]').click();
  cy.get('.complete-header').should('have.text', 'Thank you for your order!');
});
