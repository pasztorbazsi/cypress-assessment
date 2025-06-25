# Bug Report – Checkout Possible with Empty Cart

**ID:** BUG-001  
**Title:** Application allows successful checkout with an empty cart  
**Date:** 2024-06-26  
**Reported by:** Balázs Pásztor  
**Severity:** Medium  
**Priority:** Medium  
**Environment:**  
- Website:  
https://www.saucedemo.com/  
- User:  
standard_user  
- Browser(s):  
Chrome 138.0.7204.50,  
Edge 137.0.3296.93,  
Firefox 140.0  
- OS:  
Windows 11, 24H2 (OS Build 26100.4349)

## Description

The application allows users to proceed through the entire checkout process and receive a successful order confirmation, even when no items are present in the shopping cart. This is not standard e-commerce behavior and may result in confusion or data inconsistencies.

## Preconditions

- User is logged in as `standard_user`
- The cart is empty (no items added)

## Steps to Reproduce

1. Log in to https://www.saucedemo.com/ as `standard_user`.
2. Ensure that the cart is empty (do not add any items).
3. Click on the cart icon in the top right corner.
4. On the cart page (should be empty), click on the green "Checkout" button.
5. Fill out the "First Name," "Last Name," and "Postal Code" fields with valid data.
6. Click on the green "Continue."
7. On the overview page (no items shown), click on the green "Finish."

## Actual Result

- The application displays the order confirmation page with the message: "Thank you for your order!"  
- No items were listed in the order summary, and no items were actually checked out.

## Expected Result

- The system should prevent users from proceeding to checkout if the cart is empty.
- An error message or warning should be displayed, and the checkout process should not be available in this scenario.

## Attachments

- [Optional: Screenshot or video evidence]

## Notes

- This issue may lead to confusion, incorrect order data, or unexpected user experience.
- Tested with `standard_user`; issue may be present for other users as well.

>**Recommendation:**  
>Add validation to block checkout when the cart is empty, and inform the user accordingly.
