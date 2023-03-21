_**# OpenCV | Web Automation Framework**_

Cypress framework is a JavaScript-based end-to-end testing framework built on Mocha – a feature-rich JavaScript test framework running on and in the browser, making asynchronous testing simple and convenient.

_**#Features of Cypress Framework**_

Two primary features explicitly developed for Cypress web testing are:

•	**Automatic waiting** – Cypress waits for the elements to become visible, the animation to complete, DOM to load, the XHR and AJAX calls to be finished, etc. Hence, there is no need for implicit and explicit waits to be defined.

•	**Real-Time Reloads** – Cypress is intelligent enough to know that after saving a test file (xyz_cy.js file), the tester will rerun it. So, it automatically triggers the run next to the browser as soon as the tester saves their file. Hence, there is no need to trigger the run manually.

•	It waits to execute the test command automatically and enacts assertions before executing the following commands to be run.
•	It captures screenshots during test case execution to help with debugging.

•	It debugs test execution more efficiently since it provides the interactive test execution with Test Runner and logs.

•	Because of architectural design differences from other test frameworks, it provides users with faster and more reliable test execution.

•	Cypress browser support includes Google Chrome, Mozilla Firefox, and Microsoft Edge.

_**#Advantages of Cypress Web Testing**_

•	Quick, easy setup and execution of tests.

•	Writing time for tests is lower compared to other frameworks.

•	It can be integrated with any CI tool equipped for headless execution with command-line options.

•	It captures screenshots of test execution automatically in case of test failure for effective debugging.

•	Automatically reloads Test Runner once the changes have been made to the test.

_**#Components of Cypress Framework**_

The following components play a part while executing particular test cases:

•	Spec File: Contains the It(){} blocks where test execution begins. Every spec file has one describe {} block and in which different it{} blocks are contained.

•	Page Object File: Lists the methods that contain tests’ business logic. These methods comprise the actual Cypress commands to interact with the real application.

•	Page Selector File: Contains the actual locators of UI elements in a real application.

•	Constants File: Used to hold any constants used throughout test files.

_**#How to perform automation with Cypress. In order to start, users will need the following prerequisites:**_

1)	Download and Install NodeJS 

2)	Download and install Visual Studio Code

**Step 1:** Create an Empty Project Folder

**Step 2:** Open the folder in Visual Studio Code

**Step 3:** Create package.json

 In order to create the package.json, open Terminal in Visual Studio Code Menu and type the command below:
 
npm init

**Step 4:** Install Cypress

In the root Project Folder > Terminal > type 

npm install cypress --save-dev

**Step 5:** Open Cypress Window

npx cypress open

Upon successful completion of this command, the Cypress window launches.

_**#How to run Cypress tests using the Cypress command line**__

npx cypress run


