# QA Documentation & Test Cases

This directory contains the complete set of **manual test cases** and other QA documentation covering the main user flows of the SauceDemo application.

## Structure

- [`login_test_cases.md`](./login_test_cases.md): All scenarios related to the login process (positive and negative flows).
- [`checkout_test_cases.md`](./checkout_test_cases.md): All checkout-related test cases, including successful and negative flows, and cart manipulation.
- [`edgecase_test_cases.md`](./edgecase_test_cases.md): Observation and edge-case scenarios, such as the `problem_user` demo account and other special user behaviors.
- [`bug-report_empty-cart-checkout.md`](./bug-report_empty_cart_checkout.md): A sample bug report found during testing (checkout possible with an empty cart).

## Usage

Each file is organized with:
- Test case ID, title, and meta information (priority, type, module)
- Preconditions, detailed test steps, and expected results

These documents provide **full traceability** for both automated and manual QA activities, as well as examples of bug reporting and defect documentation.  
For coverage details and mapping to automated scripts, refer to the main project [README](/README.md).

## Quick Links

- [Login Test Cases](./login_test_cases.md)
- [Checkout Test Cases](./checkout_test_cases.md)
- [Edge Case Test Cases](./edgecase_test_cases.md)
- [Bug Report: Empty Cart Checkout](./bug-report_empty-cart-checkout.md)