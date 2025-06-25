// Login tests for SauceDemo application
// Covers both positive and negative authentication scenarios

import LoginPage from '../support/pageObjects/LoginPage';

const loginPage = new LoginPage();

describe('Login Tests', () => {

  beforeEach(() => {
    // Workaround: Service worker can cause Cypress load event to hang, so we intercept it.
    cy.intercept('/service-worker.js', { body: undefined });
    cy.visit('/');
    // Wait for login input field to be present (avoids flaky tests)
    cy.get('[data-test="username"]', { timeout: 15000 }).should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory');
    cy.get('.inventory_list').should('be.visible');
  });

  it('should not login with locked out user', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    cy.get('[data-test="error"]').should('contain', 'locked out');
    cy.url().should('include', '/');
  });

  it('should show error with wrong password', () => {
    loginPage.login('standard_user', 'wrong_password');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    cy.url().should('include', '/');
  });

  it('should show error with empty username', () => {
    loginPage.login('', 'secret_sauce');
    cy.get('[data-test="error"]').should('contain', 'Username is required');
    cy.url().should('include', '/');
  });
});
