# SauceDemo Automation
## SauceDemo website automation using Playwright with JavaScript.

---

## Project URL

https://www.saucedemo.com/

---

## Packages Used

- @playwright/test
- allure-playwright
- allure-commandline
- Node.js

---

## Required Environment

- **Node.js** → Version 16 or higher  
- **Java** → Version 8 or higher to Generate Allure Report

---

## Author

@hrlalon2026

---

## Documentation

### Key Highlights

- Reusable Page Object classes for:
  - Login Page
  - Inventory Page
  - Checkout Page
- Sequential execution of tests (as per assessment requirement)
- Allure reporting with:
  - Step-level details
  - Screenshots on failure
  - Cross-browser execution results
- Dynamic validation of:
  - Product names
  - Total price calculation
- Cross-browser support:
  - Chromium
  - Firefox
  - WebKit

---

# How to Run The Project Locally

## Clone the Project

```bash
git clone https://github.com/hrlalon2026/playwright-saucedemo
cd saucedemo-playwright
```

---

## Install Dependencies

```bash
npm install
npx playwright install
```

---

# Run Test Scenarios

## Scenario-1: Locked User Login Validation

```bash
npx playwright test tests/locked-user.spec.js
```

---

## Scenario-2: Standard User Complete Purchase Flow

```bash
npx playwright test tests/standard-user.spec.js
```

---

## Scenario -3: Performance User Sorting & Purchase Flow

```bash
npx playwright test tests/performance-user.spec.js
```

---

# Run All Features Sequentially

```bash
npx playwright test
```


# Run All Features in Parallel

```bash
npx playwright test --workers=3
```

---

# Generate Allure Report

Before running the tests, you need to remove previous Allure results

```bash
rm -r -fo allure-results

```

Generate Allure report
```bash
allure generate allure-results --clean
allure open
```

This will generate a detailed HTML report including:

- Test execution steps
- Failure screenshots
- Browser-wise execution results
- Execution timeline

---

# Test Credentials

### Username          
- standard_user            
- locked_out_user           
- performance_glitch_user  

### Password same for all users
- Password: secret_sauce 

---

