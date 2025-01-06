
# Cypress Test Setup

This repository contains Cypress tests that you can run using the command line.

## Prerequisites

Ensure that you have the following installed:

- Node.js (>= 16)
- npm (Node Package Manager)
- Cypress

If you don't have Cypress installed, you can install it by running:

```
npm install cypress
```

## Running the Tests

To open Cypress and run the tests, execute the following command:

```
npx cypress open
```

This will open the Cypress Test Runner in your default browser.

### Running Tests Headlessly

If you prefer to run the tests headlessly (without the Test Runner GUI), use:

```
npx cypress run
```

### Running Specific Tests

To run a specific test file:

```
npx cypress run --spec "cypress/integration/your_test_file.spec.js"
```

## Running All Tests

By default, `npx cypress run` will execute all the test files located in the `cypress/integration` folder.

## Troubleshooting

- If you encounter issues with missing dependencies, try running `npm install` to ensure all dependencies are installed.
- If Cypress does not launch, try deleting the `node_modules` folder and running `npm install` again.
- For more details on Cypress, visit the [official documentation](https://www.cypress.io/docs/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
