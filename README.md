# CryptoSearch-React Setup

These instructions are for downloading the website and running it properly: <br />
1. Download all the required files and put them in a folder. <br />
2. Open git/cmd prompt. <br />
3. Navigate to the folder directory using `cd` command. <br />
4. Do `npm install` to install required dependencies. <br />
5. Run `npm start` <br />
6. Navigate to `http://localhost:3000/` (Running `npm start` should also open it automatically when ready). <br />

# About

CryptoSearch-React is my first React.js web application. It was originally written without frameworks but rewritten in React.js. <br />
Based on a crypto name, exchange, and converted currency, the user can instantly look up the recent statistics for any supported coin. Unlike the original CryptoSearch, CryptoSearch-React features auto updating results as the user inputs a coin. This was only made possible with React.js state. <br />

You can check out the deployed web app at https://pixeltopic.github.io/CryptoSearch-React/

# Notes

Rough overview of the data flow in this application: <br />
InputForm <-> App -> fetch -> display data (using functional components) <br />
InputForm updates state as the user types into the search bar or makes changes to the dropdown menus. It also force changes state if the user clicks the refresh button in case the search didn't auto update or the user wants to update the search timestamp results. Using a callback, app accesses InputForm state and updates its own state. It then passes that state as props into fetch, which retrieves api data and passes that fetched data into dumb components which render the results.
