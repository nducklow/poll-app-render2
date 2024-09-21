# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
React Polling Application
This is a React-based polling application that displays questions and allows users to vote on their choices. It uses Apollo Client for data fetching and local storage to track the number of clicks on each choice.
Table of Contents
Features
Installation
Usage
Components
Contributing
License
Features
Display a list of questions fetched from a GraphQL API.
Track user clicks on each choice and persist them using local storage.
Navigate through questions and see updated click counts.
Installation
1- Clone the repository: github link here
2- Install dependencies: npm install
Usage
1- Start the development server: npm run dev
2- Open your browser and navigate to http://localhost:3000 to use the application.
Components
Welcome
The Welcome component serves as the main interface for users to interact with the polling application.
Imports: Uses Apollo Client for fetching questions and React hooks for state management.
State:
currentQuestionIndex: Tracks the current question being displayed.
clickCounts: Keeps track of how many times each choice has been clicked.
Effects:
Loads clickCounts from local storage on component mount.
Saves clickCounts to local storage whenever it updates.
Handlers:
handleChoiceClick: Updates the click counts when a choice is clicked.
handleNextClick: Moves to the next question when the button is clicked.
QuestionDisplay
The QuestionDisplay component displays a single question and its choices. It allows users to click on choices and shows the number of responses for each choice.
Props:
question: The question object containing the question text and choices.
onChoiceClick: A callback function to handle choice clicks.
State:
clickedChoices: Keeps track of which choices have been clicked.
Effects:
Resets clickedChoices whenever a new question is displayed.
Handlers:
handleChoiceClick: Updates the clicked choices state and invokes onChoiceClick with the choice name.
Contributing
Fork the repository.
Create a feature branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.