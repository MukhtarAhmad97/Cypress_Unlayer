# Introduction

Hello,

In this project, I worked with the Unlayer Studio platform to design and customize an email template. Here’s the process I followed:

1. I went to the Unlayer Studio website (https://studio.unlayer.com/create/team-member-introduction-email).
2. Added my name, Mukhtar Ahmad, to personalize the template.
3. Adjusted the font size and style to fit my preferences.
4. Clicked the Export button in the top right corner to export the design.
5. After export, the design is sent to email. To handle email scenarios, I used mailosaur library.
6. Then went to email and downloaded the exported file as a zip archive and stored it in my project folder, download_HTML.
7. Extracted the contents of the zip file into a folder named Extracted_html.
8. Opened the HTML file in a browser to view and compare the changes I made to the original template.

# Cypress Test Setup

This repository contains Cypress tests that you can run using the command line.

## Prerequisites

Ensure that you have the following installed:

- Node.js (>= 16)
- npm (Node Package Manager)

## Install below dependencies before running the project
```
npm install cypress
npm install cypress-iframe
npm install cypress-xpath
npm install adm-zip
npm install cypress-downloadfile
npm install cypress-mailosaur

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
