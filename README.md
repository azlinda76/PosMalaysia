# PosMalaysia
Assignment

🛠️ Installation
# Clone the repository
git clone https://github.com/azlinda76/

# Navigate to project folder
cd cypress-automation

# Install dependencies
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
# Run all tests in headless mode
npx cypress run

# Run tests in interactive mode
npx cypress open

# Run specific test file
npx cypress run --spec "cypress/e2e/calculaterate.cy.js"

📊 Reports

📸 Screenshots → cypress/screenshots
🎥 Videos → cypress/videos
📑 HTML Reports → reports/
