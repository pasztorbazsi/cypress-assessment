# Test Cases – Login

### TC-001: Successful login with standard_user

- **Priority:** High
- **Type:** Positive
- **Module:** Login

**Preconditions:**
- User is on the SauceDemo login page (`https://www.saucedemo.com/`).

**Test Steps & Expected Results:**

1. Enter `standard_user` in the Username field.  
   **Expected Result:** Username field displays `standard_user`.

2. Enter `secret_sauce` in the Password field.  
   **Expected Result:** Password field is filled (masked).

3. Click on the "Login" button.  
   **Expected Result:**  
   - User is redirected to the Inventory page.  
   - The inventory of products is displayed.

---

### TC-002: Attempt login with locked_out_user

- **Priority:** Medium
- **Type:** Negative
- **Module:** Login

**Preconditions:**
- User is on the SauceDemo login page.

**Test Steps & Expected Results:**

1. Enter `locked_out_user` in the Username field.  
   **Expected Result:** Username field displays `locked_out_user`.

2. Enter `secret_sauce` in the Password field.  
   **Expected Result:** Password field is filled (masked).

3. Click on the "Login" button.  
   **Expected Result:**  
   - "Epic sadface: Sorry, this user has been locked out." error message is displayed.  
   - User remains on the login page.

---

### TC-003: Attempt login with wrong password

- **Priority:** Medium
- **Type:** Negative
- **Module:** Login

**Preconditions:**
- User is on the SauceDemo login page.

**Test Steps & Expected Results:**

1. Enter `standard_user` in the Username field.  
   **Expected Result:** Username field displays `standard_user`.

2. Enter an **incorrect password** (e.g. `wrong_pass`) in the Password field.  
   **Expected Result:** Password field is filled (masked).

3. Click on the "Login" button.  
   **Expected Result:**  
   - "Epic sadface: Username and password do not match any user in this service" error message is displayed.  
   - User remains on the login page.

---

### TC-004: Attempt login with missing username

- **Priority:** Medium
- **Type:** Negative
- **Module:** Login

**Preconditions:**
- User is on the SauceDemo login page.

**Test Steps & Expected Results:**

1. Leave the Username field **empty**.  
   **Expected Result:** Username field remains empty.

2. Enter `secret_sauce` in the Password field.  
   **Expected Result:** Password field is filled (masked).

3. Click on the "Login" button.  
   **Expected Result:**  
   - "Epic sadface: Username is required" error message is displayed.  
   - User remains on the login page.

