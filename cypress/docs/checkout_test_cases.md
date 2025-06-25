# Test Cases – Checkout

### TC-005: Successful checkout flow (single item)

- **Priority:** High
- **Type:** Positive
- **Module:** Checkout

**Preconditions:**
- User is logged in as `standard_user`.
- User is on the Inventory page.

**Test Steps & Expected Results:**

1. Add `Sauce Labs Backpack` to the cart.  
   **Expected Result:** "Remove" button appears for the product, cart icon displays `1`.

2. Click on the cart icon on the top right corner.  
   **Expected Result:** Cart page opens, item is listed in the cart.

3. Click on the green "Checkout" button.  
   **Expected Result:** Checkout information page is displayed.

4. Enter valid information in all fields:  
   - First Name: `Elek`  
   - Last Name: `Teszt`  
   - Postal Code: `12345`  
   **Expected Result:** Each field displays the entered value.

5. Click on the green "Continue" button.  
   **Expected Result:** Overview page is displayed with selected item(s) and summary.

6. Click on the green "Finish" button.  
   **Expected Result:**  
   - User is redirected to the order confirmation page.  
   - Confirmation message "Thank you for your order!" is displayed.

---

### TC-006: Checkout with missing first name (negative)

- **Priority:** High
- **Type:** Negative
- **Module:** Checkout

**Preconditions:**
- User is logged in as `standard_user`.
- User is on the Inventory page.
- At least one item is in the cart.

**Test Steps & Expected Results:**

1. Click on the cart icon on the top right corner.  
   **Expected Result:** Cart page opens with item(s) listed.

2. Click on the green "Checkout" button.  
   **Expected Result:** Checkout information page is displayed.

3. Leave the First Name field `empty`.  
   **Expected Result:** First Name field remains empty.

4. Enter valid Last Name and Postal Code.  
   **Expected Result:** Last Name and Postal Code fields are filled.

5. Click on the green "Continue" button.  
   **Expected Result:**  
   - "Error: First Name is required" message is displayed.  
   - Checkout does not proceed to the next step.

---

### TC-007: Remove one item from cart before checkout

- **Priority:** Medium
- **Type:** Positive
- **Module:** Checkout

**Preconditions:**
- User is logged in as `standard_user`.
- User is on the Inventory page.

**Test Steps & Expected Results:**

1. Add two items to the cart:  
   - `Sauce Labs Backpack`  
   - `Sauce Labs Bike Light`  
   **Expected Result:** Both items have "Remove" buttons, cart icon displays `2`.

2. Click on the cart icon on the top right corner.  
   **Expected Result:** Cart page opens, both items are listed.

3. Remove `Sauce Labs Bike Light` from the cart.  
   **Expected Result:** Only `Sauce Labs Backpack` remains in the cart, cart icon displays `1`.

4. Click on the green "Checkout" button.  
   **Expected Result:** Checkout information page is displayed.

5. Enter valid First Name, Last Name, Postal Code.  
   **Expected Result:** Each field displays the entered value.

6. Click on the green "Continue" button.  
   **Expected Result:** Overview page is displayed with remaining item.

7. Click on the green "Finish" button.  
   **Expected Result:**  
   - Only `Sauce Labs Backpack` is listed in the order confirmation.  
   - Confirmation message "Thank you for your order!" is displayed.

---

### TC-009: Attempt checkout with empty cart

- **Priority:** Medium
- **Type:** Negative
- **Module:** Checkout

**Preconditions:**
- User is logged in as `standard_user`.
- User is on the Inventory page.
- The cart is empty (no items have been added).

**Test Steps & Expected Results:**

1. Click on the cart icon on the top right corner.  

   **Expected Result:**  
   - Cart page opens and shows no items.

2. Click on the green "Checkout" button.  

   **Expected Result:**  
   - An error message should appear indicating that you cannot checkout with an empty cart.

