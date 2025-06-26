// Login tests for SauceDemo application using Cypress fixtures
// Fixtures allow parameterized and maintainable test data management

describe('Login Tests using fixtures', () => {

  // Load test data before each test and make it available as `this.users`
  beforeEach(function () {
    // Workaround for Cypress/SauceDemo load issue
    cy.intercept('/service-worker.js', { body: undefined });
    cy.visit('/');
    cy.get('[data-test="username"]', { timeout: 15000 }).should('be.visible');
    // Load user credentials from fixture and alias as `this.users`
    cy.fixture('users').as('users');
  });

  it('should login successfully with valid credentials from fixture', function () {
    // Use credentials from fixture data for standard user
    cy.loginUser(this.users.standardUser.username, this.users.standardUser.password);
    cy.url().should('include', '/inventory');
    cy.get('[data-test="inventory-list"]').should('be.visible');
  });

  it('should not login with locked out user from fixture', function () {
    // Use locked_out_user credentials from fixture data
    cy.loginUser(this.users.lockedOutUser.username, this.users.lockedOutUser.password);
    cy.get('[data-test="error"]').should('contain.text', 'locked out');
    cy.url().should('include', '/');
  });

  it('should show error with wrong password from fixture', function () {
    // Use valid username and invalid password from fixture
    cy.loginUser(this.users.invalidPassword.username, this.users.invalidPassword.password);
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
    cy.url().should('include', '/');
  });

  it('should show error with empty username from fixture', function () {
    // Use empty username from fixture for negative test
    cy.loginUser(this.users.emptyUsername.username, this.users.emptyUsername.password);
    cy.get('[data-test="error"]').should('contain.text', 'Username is required');
    cy.url().should('include', '/');
  });
});
