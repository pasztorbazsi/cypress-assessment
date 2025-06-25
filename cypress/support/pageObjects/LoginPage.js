// Page Object for the SauceDemo login functionality.
// Note: Cypress .type() command does not accept empty strings.
// To allow negative tests (missing username or password), only type into fields when a non-empty value is provided.

class LoginPage {
  login(username, password) {
    // Type username only if non-empty (workaround for Cypress limitation)
    if (username) {
      cy.get('[data-test="username"]').type(username);
    }
    // Type password only if non-empty
    if (password) {
      cy.get('[data-test="password"]').type(password);
    }
    // Always click the login button
    cy.get('[data-test="login-button"]').click();
  }
}

export default LoginPage;
