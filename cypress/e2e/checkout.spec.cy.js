// Checkout tests for SauceDemo application using fixtures for test data
// This structure allows easy maintenance and flexibility for new test scenarios

describe('Checkout Tests using fixtures', () => {

  // Load user and checkout info before each test
  beforeEach(function () {
    // Intercept service worker for Cypress/SauceDemo compatibility
    cy.intercept('/service-worker.js', { body: undefined });
    cy.visit('/');
    cy.get('[data-test="username"]', { timeout: 15000 }).should('be.visible');
    // Load user credentials and checkout info from fixtures
    cy.fixture('users').as('users');
    cy.fixture('checkoutInfo').as('checkoutInfo');
    // Login with standard_user for all checkout scenarios
    cy.loginUser(this.users.standardUser.username, this.users.standardUser.password);
    cy.url().should('include', '/inventory');
  });

  it('should complete checkout successfully with fixture data', function () {
    // Add product using custom command, go to cart, start checkout
    cy.addToCart('add-to-cart-sauce-labs-backpack');
    cy.goToCart();
    cy.startCheckout();
    // Use valid checkout information from fixture
    const info = this.checkoutInfo.valid;
    cy.fillCheckoutInfo(info.firstName, info.lastName, info.zip);
    cy.continueCheckout();
    // Assert correct product and order completion
    cy.get('.cart_item').should('have.length', 1);
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.finishCheckout();
  });

  it('should show error with missing first name using fixture data', function () {
    cy.addToCart('add-to-cart-sauce-labs-backpack');
    cy.goToCart();
    cy.startCheckout();
    // Use checkout info with missing first name from fixture (negative validation)
    const info = this.checkoutInfo.missingFirstName;
    cy.fillCheckoutInfo(info.firstName, info.lastName, info.zip);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required');
  });

  it('should allow removing an item from cart before checkout using fixture data', function () {
    // Add two products, remove one, proceed with checkout
    cy.addToCart('add-to-cart-sauce-labs-backpack');
    cy.addToCart('add-to-cart-sauce-labs-bike-light');
    cy.goToCart();
    cy.removeFromCart('remove-sauce-labs-bike-light');
    cy.get('.cart_item').should('have.length', 1);
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.startCheckout();
    const info = this.checkoutInfo.valid;
    cy.fillCheckoutInfo(info.firstName, info.lastName, info.zip);
    cy.continueCheckout();
    cy.get('.cart_item').should('have.length', 1);
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.finishCheckout();
  });
});
