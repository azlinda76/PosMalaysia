# PosMalaysia
Assignment

🛠️ Installation
1. Clone the repository
git clone https://github.com/azlinda76/

2. Navigate to project folder
cd cypress-automation

3. Install dependencies
npm install

📂 Project Structure
cypress-automation/
│── cypress/
│   ├── e2e/             # Test cases
│   ├── fixtures/        # Test data (JSON)
│   ├── pages/           # Page Object files
│   ├── support/         # Custom commands & hooks
│── reports/             # Test reports
│── cypress.config.js    # Cypress configuration
│── package.json         # Dependencies
│── README.md            # Project documentation

▶️ Running Tests
1. Run all tests in headless mode
npx cypress run

2. Run tests in interactive mode
npx cypress open

3. Run specific test file
npx cypress run --spec "cypress/e2e/calculaterate.cy.js"

📊 Reports

📸 Screenshots → cypress/screenshots
🎥 Videos → cypress/videos
📑 HTML Reports → reports/
