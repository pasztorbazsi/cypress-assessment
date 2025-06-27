## Tadaweb QA Automation Assessment
This project contains Cypress-based E2E tests for validating login and checkout flows on [SauceDemo](https://www.saucedemo.com/).

## 🚀 Test Strategy
The primary focus is on verifying the critical user flows of login and checkout, ensuring both standard and error scenarios are covered. The approach combines positive and negative testing, emphasizing both business logic and user experience aspects (such as error messaging and blocked accounts).

~~Tests are designed for maintainability using the Page Object Model, to isolate selectors and actions for reuse and easy update.~~*  
>*Replaced with Cypress Custom Commands.  

User-visible error handling is checked, including error messages for each negative case.

Both standard and edge case users (provided by SauceDemo) are explicitly tested to ensure the frontend correctly handles problematic and blocked accounts. Test scripts aim for fast feedback, easy maintenance, and reliability across different environments.

Due to the public nature of the site, potential rate limiting or downtime is considered in the design. Additional exploratory and UI-focused tests are suggested for future expansion.

## 📝 Test Cases
> For traceability and documentation, all step-by-step manual test cases are included in the [`docs`](/cypress/docs/) folder.  
> The following is a summary of the automated E2E flows implemented with Cypress:

### Login
- ✅ **Valid login with standard_user** (Positive) - Valid login: `standard_user`
	- Checks that a standard user can log in and is redirected to the inventory page.

- ❌ **Locked out user** (Negative) - Locked out: `locked_out_user`
	- Verifies error message appears for locked out users; ensures access control.

- ❌ **Wrong password** (Negative)
	- Validates handling of incorrect passwords for valid usernames.

- ❌ **Missing username** (Negative)
	- Ensures the system does not allow logins with empty credentials and displays an error.


### Checkout
- ✅ **Successful checkout** (Positive)
	- Simulates a full purchase flow; ensures correct navigation and completion message.

- ❌ **Missing first name on checkout** (Negative)
	- Checks validation of mandatory fields in the checkout form.

- ✅ **Remove item from cart before checkout** (Positive)  
	- Verifies that users can add multiple items to the cart, remove an item before checkout, and only the remaining item is included in the order confirmation.


### 🧪 Edge-case / Special User Observation
A separate observation-only test is included for SauceDemo’s `problem_user`.  
This user triggers intentional UI and functional bugs (broken images, field input issues, etc.) for demo purposes.
No assertions are made on these behaviors.

## ⚙️ Run Tests

### Install dependencies
```
npm  install
```
### Cypress GUI

```
npx  cypress  open
```

### Headless run
```
npx  cypress  run
```

## Suggestions for Further Test Coverage

- **Expand automated coverage to include performance edge cases.**  
  Add test flows for special users intentionally designed to expose slow performance, validating the system’s robustness.

- **Integrate the test suite with a CI/CD pipeline for automated checks on pull requests.**  
  Set up continuous integration to run tests automatically on every code change, ensuring rapid feedback and minimizing the risk of regressions.

- **Add tests for cart persistence across logins, and for logout functionality.**  
  Validate whether cart contents are retained after logging out and back in, and confirm that the logout process properly clears user data and session state.

- **Explore adding accessibility checks and visual diff tools for UI regression.**  
  Use automated tools to check visual snapshot comparisons to detect unintended UI changes.


## Assumptions and Limitations

- **Testing is performed against the public SauceDemo site, which may occasionally block automated traffic or rate limit requests.**  
  All tests run on the live demo environment, which sometimes restricts automated testing for stability or security. This can cause temporary failures that are not related to test code or application functionality.

- **Only the provided user accounts are used; custom account creation is not tested.**  
  Test coverage is limited to the predefined users supplied by SauceDemo (e.g., standard_user, locked_out_user). User registration, account management, or permission variations outside these test users are not covered.

- **Tests are written for desktop viewport like Chrome, Electron, Firefox; mobile/responsive scenarios are not covered here.**  
  The automation scripts are designed for desktop browsers. Responsive design and mobile-specific UI/UX are out of scope for this assessment.

- **No backend or API mocking is used, tests interact directly with the live site.**  
  All tests exercise the full stack of the public application, without intercepting or simulating backend responses. This ensures realistic end-to-end coverage, but also means that any backend downtime, slowness, or changes will impact test results.


## Known Issues / Observations 

During testing, an issue was found where the application allows checkout to be completed with an empty cart. This scenario is most likely an unintended behavior for any production e-commerce site.

A detailed bug report describing this issue is included in this repository. This demonstrates how I would document and report bugs discovered during testing, in addition to providing automated test coverage.

### 📋 Bug Reporting – Example

**Empty Cart Checkout Allowed:**  
The application allows users to complete the checkout process with an empty cart (no items selected).  
This is likely not intended in a real-world context.  
See the attached [`Bug report`](/cypress/docs/bug-report_empty_cart_checkout.md) for full details and steps to reproduce.

>*(No automated test was created for this scenario, as fixing the bug would make such a test obsolete and failing in future runs.)*


### Note on Page Objects vs. Cypress Custom Commands

This project originally started with a Page Object Model (POM) approach to encapsulate user actions and selectors,  
in line with traditional test automation best practices.  
However, after initial implementation and review, I decided to refactor the tests to use Cypress custom commands for all key user actions.

This change was made for the following reasons:
- Cypress custom commands are the recommended, idiomatic way to encapsulate repetitive flows and user interactions in Cypress.
- For smaller or single-page applications (such as this assessment), custom commands keep tests cleaner, more readable, and easier to maintain than traditional page objects.
- All business logic is now separated into reusable commands, with test data managed via fixtures, resulting in concise, maintainable, and scalable test scripts.

The previous Page Object files are no longer used and have been removed to simplify the codebase.
