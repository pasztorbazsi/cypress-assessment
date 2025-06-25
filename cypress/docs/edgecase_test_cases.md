## Edge-case / Special User

### TC-008: Observation – problem_user demo account

- **Priority:** Low
- **Type:** Observation / Edge-case
- **Module:** Special User

**Preconditions:**
- User is on the SauceDemo login page.

**Test Steps & Expected Results:**

1. Login with Username: `problem_user`, Password: `secret_sauce`.  
   **Expected Result:**  Login is successful; user is redirected to the Inventory page.

2. Observe the product images on the inventory page.  
   **Expected Result:**  All product images are replaced by a dog image (not the actual product image).

3. Add `Sauce Labs Backpack` to the cart.  
   **Expected Result:**  "Remove" button appears for the product on the inventory page; cart icon displays `1`.

4. Still on the inventory page, click on the "Remove" button for the product.  
   **Expected Result:**  **Nothing happens:** item remains in the cart, cart icon still displays `1` (Remove button is non-functional on inventory page).

5. Go to the cart page and click on the "Remove" button for the item.  
   **Expected Result:**  Item is removed from the cart; cart becomes empty.

6. Go to checkout, attempt to fill in First Name and Last Name fields.  
   **Expected Result:**  
   - Typing in the Last Name field causes the First Name field to be overwritten with the typed character (demo bug).
   - Fields may not behave as expected due to intentionally buggy user.

**Note:**  
- These are **observation-only** steps; failures or anomalies are not asserted and are expected due to the demo account.
- This test is intended to demonstrate awareness of special user behaviors in the demo environment.
