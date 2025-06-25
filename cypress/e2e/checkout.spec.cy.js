// Checkout tests for SauceDemo application
// Covers successful checkout, validation errors, and cart item removal

import LoginPage from '../support/pageObjects/LoginPage';
import CheckoutPage from '../support/pageObjects/CheckoutPage';

const loginPage = new LoginPage();
const checkoutPage = new CheckoutPage();

describe('Checkout Tests', () => {

  beforeEach(() => {
    // Intercept service worker to prevent load event hang
    cy.intercept('/service-worker.js', { body: undefined });
    cy.visit('/');
    cy.get('[data-test="username"]', { timeout: 15000 }).should('be.visible');
    // Login for all checkout tests
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory');
  });

  it('should complete checkout successfully', () => {
    // Add one product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart');
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one');
    checkoutPage.fillInformation('Elek', 'Teszt', '12345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two');
    // Check that there is really 1 product in the list and that the correct name is included.
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

  it('should show error with missing first name', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart');
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one');
    // Do not fill in first name (Cypress .type workaround handled in PageObject)
    checkoutPage.fillInformation('', 'Teszt', '12345');
    cy.get('[data-test="continue"]').click();
    // Check for exact error text, based on data-test
    cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required');
    cy.url().should('include', '/checkout-step-one');
  });

  it('should allow removing an item from cart before checkout', () => {
    // Add two products to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart');
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    // Verify only one item remains (backpack) and correct item
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one');
    checkoutPage.fillInformation('Elek', 'Teszt', '12345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two');
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });
});
